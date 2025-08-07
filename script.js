// To'g'ri 28 xonali kod
const correctCode = "7943-5467-2c84-1dc0-3c86-0355-6482";

// Kodni tekshirish funksiyasi
function verifyCode() {
  const input = document.getElementById("docCode").value.trim();
  const msg = document.getElementById("codeMessage");

  if (input === correctCode) {
    document.getElementById("codePage").classList.add("hidden");
    document.getElementById("pinPage").classList.remove("hidden");
    msg.textContent = "";
  } else {
    msg.textContent = "Код неверный. Попробуйте снова.";
  }
}

// PIN kodni tekshirish funksiyasi
function checkPIN() {
  const pin = document.getElementById("pin").value.trim();
  const message = document.getElementById("message");

  message.style.color = "red";
  message.textContent = "";

  if (pin === "1949") {
    message.style.color = "green";
    message.textContent = "Успешно! Документ открывается...";
    setTimeout(() => {
      // Hujjatga yo'naltirish
      window.location.href = "https://drive.google.com/file/d/1shyJu3KtSKu2RjiKPNEqSyfOk_z80E9D/view";
    }, 1000);
  } else {
    message.textContent = "Неверный PIN-код. Попробуйте снова.";
  }
}

// Enter tugmasini bosganda PIN tekshirilsin
document.getElementById("pin").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkPIN();
  }
});

// Enter tugmasini bosganda kod tekshirilsin
document.getElementById("docCode").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    verifyCode();
  }
});
