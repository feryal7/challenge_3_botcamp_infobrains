document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = loginForm.querySelector("input[name='email']").value.trim();
        const password = loginForm.querySelector("input[name='password']").value.trim();

        if (!email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            const response = await fetch("https://www.shorten-url-api.infobrains.club/api/public/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.status === 200) {
                localStorage.setItem("token", data.data.accessToken);
                window.location.href = "/pages/shorten.html";
            } else {
                alert(data.error.details || "Login failed.");
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
        }
    });
});