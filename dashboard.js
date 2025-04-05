document.addEventListener("DOMContentLoaded", function () {
    const accountTab = document.getElementById("accountTab");
    const homeTab = document.getElementById("homeTab");
    const logoutBtn = document.getElementById("logoutBtn");
    const homeSection = document.getElementById("homeSection");
    const accountSection = document.getElementById("accountSection");
    const changePasswordBtn = document.getElementById("changePasswordBtn");
    const passwordModal = document.getElementById("passwordModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const savePasswordBtn = document.getElementById("savePasswordBtn");
    const usernameDisplay = document.getElementById("usernameDisplay");
    const accountUsername = document.getElementById("accountUsername");
    const settingsSection = document.getElementById("settingsSection");
    const settbutton = document.getElementById("settbutton");

    let username = localStorage.getItem("username") || "Користувач";

    usernameDisplay.textContent = username;
    accountUsername.textContent = username;

    accountTab.addEventListener("click", function (event) {
        event.preventDefault();
        homeSection.classList.add("hidden");
        accountSection.classList.remove("hidden");
    });

    homeTab.addEventListener("click", function (event) {
        event.preventDefault();
        accountSection.classList.add("hidden");
        homeSection.classList.remove("hidden");
    });

    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("username");
        window.location.href = "login.html";
    });

    changePasswordBtn.addEventListener("click", function () {
        passwordModal.classList.remove("hidden");
    });

    settbutton.addEventListener("click", function () {
        settbutton.classList.remove("hidden");
    });


    savePasswordBtn.addEventListener("click", function () {
        const newPassword = document.getElementById("newPassword").value;
        if (newPassword.trim() !== "") {
            alert("Пароль змінено успішно!");
            passwordModal.classList.add("hidden");
        } else {
            alert("Введіть новий пароль!");
        }
    });

    closeModalBtn.addEventListener("click", function () {
        passwordModal.classList.add("hidden");
    });
});
