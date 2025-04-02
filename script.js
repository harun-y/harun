document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const responseMessage = document.getElementById("response-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Sayfanın yeniden yüklenmesini önler

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            responseMessage.style.color = "red";
            responseMessage.textContent = "Bitte füllen Sie alle Felder aus.";
        } else {
            responseMessage.style.color = "green";
            responseMessage.textContent = "Ihre Nachricht wurde erfolgreich gesendet!";
            
            // Formu temizle
            form.reset();
        }
    });
});
