// utils/token.js

// Function to generate OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit OTP
}

// Function to generate a dummy QR code (for example purposes)
function generateQRCode() {
    return `https://example.com/qr/${Math.floor(100000 + Math.random() * 900000)}`; // Generates a QR code URL
}

module.exports = {
    generateOTP,
    generateQRCode
};

// This is a basic version that:

// Generates a 6-digit OTP.
// Generates a dummy QR code URL.
// You can replace the QR code generation logic with actual QR code generation logic using a library like qrcode or qr-image later