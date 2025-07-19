

exports.registerDevice = (req, res) => {
    const { device_id } = req.body;
    const expire = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(); 

    if (!device_id) {
        return res.status(400).json({ message: 'Device ID is required.' });
    }

    console.log(`[Dummy] Registering device: ${device_id}`);
    return res.status(200).json({ message: 'Device registered (dummy)', expire, device_id });
};

exports.checkLicense = (req, res) => {
    const { device_id } = req.body;

    if (!device_id) {
        return res.status(400).json({ message: 'Device ID is required.' });
    }


    const now = new Date();
    const hardcodedExpiresAt = new Date(now.getTime() + 60 * 60 * 1000).toISOString(); 
    const expired = new Date(hardcodedExpiresAt) < now; 

    console.log(`[Dummy] Checking license for device: ${device_id}`);
    return res.status(200).json({
        device_id,
        status: expired ? 'expired' : 'active', 
        expires_at: hardcodedExpiresAt,
        message: 'License check (dummy)'
    });
};

exports.deactivateDevice = (req, res) => {
    const { device_id } = req.body;

    if (!device_id) {
        return res.status(400).json({ message: 'Device ID is required.' });
    }

    console.log(`[Dummy] Deactivating device: ${device_id}`);
    return res.status(200).json({ message: 'Device deactivated (dummy)', device_id });
};