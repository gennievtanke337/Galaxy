document.addEventListener("DOMContentLoaded", function () {
    const accountTab = document.getElementById("accountTab");
    const logoutBtn = document.getElementById("logoutBtn");
    const homeSection = document.getElementById("homeSection");
    const accountSection = document.getElementById("accountSection");
    const changePasswordBtn = document.getElementById("changePasswordBtn");
    const passwordModal = document.getElementById("passwordModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const savePasswordBtn = document.getElementById("savePasswordBtn");
    const usernameDisplay = document.getElementById("usernameDisplay");

    let username = localStorage.getItem("username");

    if (!username) {
        username = prompt("Введіть ваше ім'я яке буде показуватись користувачам") || "Користувач";
        localStorage.setItem("username", username);
    }

    usernameDisplay.textContent = username;

    accountTab.addEventListener("click", function (event) {
        event.preventDefault();
        homeSection.classList.add("hidden");
        accountSection.classList.remove("hidden");
    });

    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("username");
        window.location.href = "login.html";
    });

    changePasswordBtn.addEventListener("click", function () {
        passwordModal.classList.remove("hidden");
    });

    savePasswordBtn.addEventListener("click", function () {
        const newPassword = document.getElementById("newPassword").value;
        if (newPassword.trim() !== "") {
            alert("Пароль змінено успішно");
            passwordModal.classList.add("hidden");
        } else {
            alert("Введіть новий пароль");
        }
    });

    closeModalBtn.addEventListener("click", function () {
        passwordModal.classList.add("hidden");
    });
});
