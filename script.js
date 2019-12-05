var generate = document.querySelector("#submit");

generate.addEventListener("click", function(password) {
  event.preventDefault();

  console.log(password);
  
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
});
String password = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-`~_=+[]{}/.,<>";
Random textbox = new Random();
character =