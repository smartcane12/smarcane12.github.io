document.getElementById('generateBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value.trim();
    const refNumber = document.getElementById('refNumber').value.trim();
    const age = document.getElementById('age').value.trim();
    const zone = document.getElementById('zone').value.trim();

    // Crear un texto simplificado
    const qrData = `Nombre :${name}\nNumero de referencia: ${refNumber}\nEdad: ${age}\ndireccion: ${zone}`;

    const qrCodeContainer = document.getElementById('qrCode');
    qrCodeContainer.innerHTML = '';  // Limpiar cualquier QR previo
    
    try {
        new QRCode(qrCodeContainer, {
            text: qrData,
            width: 130,
            height: 130,
        });
    } catch (e) {
        console.error('Error al generar el código QR:', e);
    }
});
