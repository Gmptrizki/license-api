# Smart License API

This is a lightweight RESTful API built with **Node.js**, **Express**, and **SQLite**, designed to handle device registration and license control for Android-based systems.

The API supports registration, authentication, and license validation for client devices such as rooted Android smartphones using Magisk modules.

---

## ✨ Features

- 📱 Register and verify device licenses
- ⏳ License expiration handling
- 🔐 Simple API key protection via environment variables
- 💾 Lightweight SQLite database (no external DB required)

---

## 🧩 Use Case

This API helps manage remote licensing for Android devices with pre-installed modules (e.g., for location spoofing). Once a license expires, modules on the device can be automatically deleted or disabled remotely.

---

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [body-parser](https://www.npmjs.com/package/body-parser)

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Gmptrizki/license-api.git
   cd license-api
