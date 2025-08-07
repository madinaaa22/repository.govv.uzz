let generatedCaptcha = "";

// To'g'ri 28 xonali kod
const correctCode = "7943-5467-2c84-1dc0-3c86-0355-6482";

function verifyCode() {
  const input = document.getElementById("docCode").value.trim();
  const msg = document.getElementById("codeMessage");

  if (input === correctCode) {
    document.getElementById("codePage").classList.add("hidden");
    document.getElementById("pinPage").classList.remove("hidden");
    generateCaptcha();
  } else {
    msg.textContent = "Код неверный. Попробуйте снова.";
  }
}

function generateCaptcha() {
  const canvas = document.getElementById("captchaCanvas");
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);

  const bgColors = ["#e0d4fc", "#cdebf9", "#ffd6e0", "#fdfdcf", "#dcf8c6"];
  ctx.fillStyle = bgColors[Math.floor(Math.random() * bgColors.length)];
  ctx.fillRect(0, 0, width, height);

  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz";
  generatedCaptcha = "";
  for (let i = 0; i < 5; i++) {
    const char = chars.charAt(Math.floor(Math.random() * chars.length));
    generatedCaptcha += char;
    ctx.font = "bold 22px Arial";
    ctx.fillStyle = getRandomColor();
    const x = 10 + i * 18 + Math.random() * 5;
    const y = 25 + Math.random() * 5;
    ctx.fillText(char, x, y);
  }

  for (let i = 0; i < 30; i++) {
    ctx.fillStyle = getRandomColor();
    ctx.beginPath();
    ctx.arc(Math.random() * width, Math.random() * height, 1, 0, 2 * Math.PI);
    ctx.fill();
  }

  for (let i = 0; i < 2; i++) {
    ctx.strokeStyle = getRandomColor();
    ctx.beginPath();
    ctx.moveTo(Math.random() * width, Math.random() * height);
    ctx.lineTo(Math.random() * width, Math.random() * height);
    ctx.stroke();
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function checkPIN() {
  const pin = document.getElementById("pin").value.trim();
  const captchaInput = document.getElementById("captchaInput").value.trim();
  const message = document.getElementById("message");

  message.style.color = "red";
  message.textContent = "";

  if (captchaInput !== generatedCaptcha) {
    message.textContent = "Код проверки введен неверно.";
    generateCaptcha();
    return;
  }

  if (pin === "1290") {
    message.style.color = "green";
    message.textContent = "Успешно! Документ открывается...";
    setTimeout(() => {
      window.location.href = "https://drive.google.com/file/d/1shyJu3KtSKu2RjiKPNEqSyfOk_z80E9D/view";
    }, 1000);
  } else {
    message.textContent = "Неверный PIN-код. Попробуйте снова.";
  }
}

document.getElementById("pin").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkPIN();
  }
});
