let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

var typed = new Typed('.multiple-text', {
      strings: ['Web Developer', 'Web Designer', 'UI/UX Designer', 'Graphic Designer', 'Frontend Developer'],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,
    });

    var typed = new Typed('.multiple-text2', {
      strings: ['Web Developer', 'Web Designer', 'UI/UX Designer', 'Graphic Designer', 'Frontend Developer'],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,
    });

    ScrollReveal({ 
        distance: '80px',
        duration: 2000,
        delay: 200,
     });

     ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
     ScrollReveal().reveal('.home-img, .timeline-items, .project-box, .contact form', {origin: 'bottom'});
     ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
     ScrollReveal().reveal('.home-content p, .about-content, .skill-img', {origin: 'right'});

     document.getElementById("send-btn").addEventListener("click", function () {

        const email = document.getElementById("email");

if (!email.checkValidity()) {
    email.reportValidity();
    return;
}  

emailjs.send(
        "service_kg13tcx",
        "template_kacjwhd",
        {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            contact: document.getElementById("phone").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        }
    )

    .then(function (response) {

        console.log("SUCCESS!", response);

        const popup = document.getElementById("success-popup");

        popup.style.display = "block";

        popup.style.animation = "none";
        popup.offsetHeight;
        popup.style.animation = "popupAnimation 3s ease forwards";

        setTimeout(() => {
            popup.style.display = "none";
        }, 3000);

        document.querySelector("form").reset();

    })

    .catch(function (error) {

        console.log("FAILED...", error);

        alert("Failed to send message.");

    });

});