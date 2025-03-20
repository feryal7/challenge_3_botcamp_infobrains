const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});




/*document.addEventListener("DOMContentLoaded", () => {
    const authWrapper = document.getElementById("auth-wrapper");
    const btnPopup = document.querySelector(".btnlogin-popup");
    const iconClose = document.querySelector(".icon-close");
    const toggleAuthLinks = document.querySelectorAll(".toggle-auth");

    btnPopup.addEventListener("click", () => {
        authWrapper.style.display = "flex"; // إظهار النماذج
        document.querySelector(".form-box.login").style.display = "none"; // إخفاء login
        document.querySelector(".form-box.register").style.display = "block"; // إظهار register
    });

    iconClose.addEventListener("click", () => {
        authWrapper.style.display = "none"; // إخفاء النماذج
    });

    toggleAuthLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(".form-box.login").classList.toggle("active");
            document.querySelector(".form-box.register").classList.toggle("active");

            if (document.querySelector(".form-box.register").classList.contains("active")) {
                document.querySelector(".form-box.login").style.display = "none";
                document.querySelector(".form-box.register").style.display = "block";
            } else {
                document.querySelector(".form-box.login").style.display = "block";
                document.querySelector(".form-box.register").style.display = "none";
            }
        });
    });
});*/
