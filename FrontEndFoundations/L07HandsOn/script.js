const regexChecker = () => {
  let firstname = document.getElementById("firstName").value;
  let lastname = document.getElementById("lastName").value;
  let nameregex = /^[A-Z][a-z0-9]{1,50}$/;

  if (firstname.match(nameregex) && lastname.match(nameregex)) {
    alert("Yay! Your inputs were all correct!");
  } else {
    alert("Oh no! That's an invalid format!");
  }
};
