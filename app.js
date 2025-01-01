function validateForm(event) {
  event.preventDefault(); // to prevent the page from reloading
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let isValid = true;

  // e-mail verification
  if (!email.includes("@")) {
    document.getElementById("email-error").innerText = "Please enter a valid e-mail address";
    document.getElementById("email-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("email-error").style.display = "none";
  }

  // password verification
  if (password.length < 6) {
    document.getElementById("password-error").innerText = "Your password must contain at least 6 characters";
    document.getElementById("password-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("password-error").style.display = "none";
  }

  return isValid;
}
