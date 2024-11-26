const { createQRCode } = require('./service');

const generateQRCode = async (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).send({ error: 'Text is required!' });
    }
    try {
        const qrCode = await createQRCode(text);
        res.send({ qrCode });
    } catch (error) {
        res.status(500).send({ error: 'Failed to generate QR Code' });
    }
};

module.exports = { generateQRCode };
