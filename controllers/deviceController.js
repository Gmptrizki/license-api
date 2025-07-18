const db = require('../models/Device');

exports.registerDevice = (req, res) => {
    const { device_id } = req.body;
    const now = new Date().toISOString();
    const expire = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(); // 30 hari

    db.run(`INSERT OR IGNORE INTO devices(device_id, registered_at, expires_at, status) VALUES (?, ?, ?, ?)`,
        [device_id, now, expire, 'active'],
        function (err) {
            if (err) return res.status(500).json({ message: err.message });
            return res.json({ message: 'Device registered', expire });
        });
};

exports.checkLicense = (req, res) => {
    const { device_id } = req.body;
    db.get(`SELECT * FROM devices WHERE device_id = ?`, [device_id], (err, row) => {
        if (err) return res.status(500).json({ message: err.message });
        if (!row) return res.status(404).json({ message: 'Device not found' });

        const now = new Date();
        const expired = new Date(row.expires_at) < now;
        return res.json({
            device_id,
            status: expired ? 'expired' : 'active',
            expires_at: row.expires_at
        });
    });
};

exports.deactivateDevice = (req, res) => {
    const { device_id } = req.body;
    db.run(`UPDATE devices SET status = 'inactive' WHERE device_id = ?`, [device_id], function (err) {
        if (err) return res.status(500).json({ message: err.message });
        return res.json({ message: 'Device deactivated' });
    });
};
