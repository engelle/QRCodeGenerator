const form = document.getElementById('qr-form');
const qrResult = document.getElementById('qr-result');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const text = document.getElementById('text').value;

    const response = await fetch('http://localhost:3000/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
    });

    const { qrCode } = await response.json();
    qrResult.innerHTML = `<img src="${qrCode}" alt="QR Code">`;
});
