function phoneNumberFormat() {
  let phoneNumber = document.getElementById("phNumber").value;
  let phoneRegex = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/; // or let phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
  if (phoneNumber.match(phoneRegex)) {
    alert("Valid number entered");
    console.log(true);
  } else {
    alert("Phone number entered is invalid");
    console.log(false);
  }
}
