const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    if(qrText.value.length > 0) generateQRCode();
});

downloadBtn.addEventListener('click', (e)=>{
    let img = qrContainer.querySelector('img');
    let canvas = qrContainer.querySelector('canvas');

    if(img){
        downloadBtn.href = img.src;
    } else if(canvas){
        downloadBtn.href = canvas.toDataURL();
    } else {
        e.preventDefault();
        alert("Please generate a QR Code first!");
    }
});

function isEmptyInput(){
    qrText.value.length > 0 
        ? generateQRCode() 
        : alert("Enter the text or URL to generate your QR code");
}

function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrText.value,
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000",
    });
}
