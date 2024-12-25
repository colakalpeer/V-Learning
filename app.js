function validateForm() {
  const email = document.getElementById("email").valueitrim();
  const password = document.getElementById("password").value.trim();
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  emailError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;

  // Email validation
  if (email === "") {
    emailError.textContent = "Please enter your email.";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
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
