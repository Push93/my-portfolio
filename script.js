
document.addEventListener("DOMContentLoaded", function () {
    // Automatically update the footer year
    document.querySelectorAll(".year").forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

    // Mobile navigation
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            const isOpen = navigation.classList.toggle("open");
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.textContent = isOpen ? "✕" : "☰";
        });

        navigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navigation.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.textContent = "☰";
            });
        });
    }

    // Prepare a message in the visitor's email application
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    if (contactForm && formStatus) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!contactForm.reportValidity()) {
                return;
            }

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            // Replace this with your real email address.
            const recipient = "your-email@example.com";

            if (recipient === "your-email@example.com") {
                formStatus.textContent =
                    "Demo mode: replace the placeholder email in script.js and contact.html with your real email.";
                return;
            }

            const body =
                "Name: " + name +
                "\nEmail: " + email +
                "\n\nMessage:\n" + message;

            const mailto =
                "mailto:" + recipient +
                "?subject=" + encodeURIComponent(subject) +
                "&body=" + encodeURIComponent(body);

            formStatus.textContent =
                "Your email application will open with the message prepared.";

            window.location.href = mailto;
        });
    }
});
