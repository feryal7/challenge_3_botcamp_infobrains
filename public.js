(
    () => {
        const token = localStorage.getItem('token')
        if (token) {
            window.location.href = '/pages/shorten.html'
        }
    }
)()