function validateForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  emailError.textContent = "";
  passwordError.textContent = "";

  const isValid = true;

  if (email === "" || /\d/.test(email)) {
    emailError.textContent = "Please enter your E-mail properly.";
    isValid = false;
  }

  if (email === "" || !email.includes("@")) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (password === "" || password.length < 6) {
    passwordError.textContent =
      "Please enter a password with at least 6 characters.";
    isValid = false;
  }

  return isValid;
}
