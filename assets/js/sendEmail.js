function sendMail(contactForm) {
    emailjs.send("gmail", "luca", {
        "message": contactForm.projectsummary.value,
        "user_name": contactForm.name.value,
        "user_email": contactForm.emailaddress.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}