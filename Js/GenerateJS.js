const wrapper = document.querySelector(".wrapper");
const qrInput = wrapper.querySelector(".form input");
const generateBtn = wrapper.querySelector(".form button");
const qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    const currentDate = new Date().toDateString(); // Get the current date as a string

    if (qrInput.value.trim() === currentDate) {
        // If the input matches the current date, generate random characters
        const randomChars = generateRandomCharacters(10); // Change 10 to the desired length
        qrValue = randomChars;
    } else {
        qrValue = qrInput.value.trim();
    }

    if (!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});

function generateRandomCharacters(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomChars = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomChars += charset[randomIndex];
    }
    return randomChars;
}
