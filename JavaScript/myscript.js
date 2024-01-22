document.addEventListener('DOMContentLoaded', function () {

    var btn = document.getElementById("btn");
    var contactForm = document.getElementById("contact");
    var SendMessage = document.getElementById("SendMessage");
    var submissionCount = 0;
    var messages = [];

    btn.onclick = function () {
        var firstName = document.getElementById("firstName").value;
        var surname = document.getElementById("surname").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var messageText = document.getElementById("message").value;

        if (firstName === "" || surname === "" || email === "" || subject === "" || messageText === "") {
            alert("Enter all required fields (*)");
        } else {
            var phone = document.getElementById("phone").value;
            var date = new Date().toISOString().split('T')[0];
            var time = new Date().toLocaleTimeString();

            var message = {
                firstName: firstName,
                surname: surname,
                email: email,
                phone: phone,
                date: date,
                time: time,
                subject: subject,
                message: messageText
            };

            messages.push(message);

            submissionCount++;

            contactForm.style.display = "none";

            SendMessage.style.display = "block";

            var messageHtml = "<h2 style='color: black; font-family: 'Verdana'; font-size: 14px; '>Thank You.</h2>" +
                "<p style='color: black; font-family: 'Verdana'; font-size: 14px; text-align: center;'>Your message has been sent!</p>" +
                "<p style='color: black; font-family: 'Verdana'; font-size: 12px; text-align: center;'>You sent message " + submissionCount + (submissionCount > 1 ? " times" : " time") + ":</p>";

            messageHtml += "<ul style='color: black;'>";
            messages.forEach(function (msg) {
                messageHtml += "<li>" + msg.date + " " + msg.time + "</li>";
            });
            messageHtml += "</ul>";

            messageHtml += "<p style='color: black; font-family: 'Verdana'; font-size: 12px; text-align: center;'> To send another message, <a href='#' id='resetForm'>Click here</a></p>";

            SendMessage.innerHTML = messageHtml;

            document.getElementById("resetForm").onclick = function () {
                document.getElementById("firstName").value = "";
                document.getElementById("surname").value = "";
                document.getElementById("email").value = "";
                document.getElementById("phone").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";
				document.getElementById("date").value = "";
				document.getElementById("time").value = "";

                contactForm.style.display = "block";

                SendMessage.style.display = "none";
            };
        }
    };
});