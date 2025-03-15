document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");

    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = registerForm.querySelector("input[name='name']").value.trim();
        const email = registerForm.querySelector("input[name='email']").value.trim();
        const password = registerForm.querySelector("input[name='password']").value.trim();

        if (!name || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            const response = await fetch("https://www.shorten-url-api.infobrains.club/api/public/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();

            if (response.status === 201) {
                localStorage.setItem("token", data.data.accessToken);
                window.location.href = "/pages/shorten.html";
            } else {
                alert(data.error.details || "Registration failed.");
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
        }
    });
});