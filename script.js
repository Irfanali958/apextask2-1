document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.email.value;
  const name = this.name.value;
  const message = this.message.value;
  const status = document.getElementById('formStatus');

  if (!name || !email || !message) {
    status.innerText = "Please fill in all fields.";
    status.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    status.innerText = "Please enter a valid email address.";
    status.style.color = "red";
    return;
  }

  status.innerText = "Form submitted successfully!";
  status.style.color = "green";
  this.reset();
});

