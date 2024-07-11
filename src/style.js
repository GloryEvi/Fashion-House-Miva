function contact() {
  let name = prompt("what is your name?");
  let email = prompt("what is your email address?");

  alert("Thank you " + name + ",We'll be in touch by email.");
}
let contactButton = document.querySelector(".contact-button");
contactButton.addEventListener("click", contact);
