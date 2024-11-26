const QRCode = require('qrcode');

const createQRCode = async (text) => {
    try {
        return await QRCode.toDataURL(text);
    } catch (error) {
        throw new Error('QR Code generation failed');
    }
};

module.exports = { createQRCode };
