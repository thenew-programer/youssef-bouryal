const tab_links = document.querySelectorAll(".tab-links");
const tab_content = document.querySelectorAll(".tab-content");
const sidemenu = document.getElementById("side-menu");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyBNACyb_geV0-yjwJyX4x2KYdk4oqcR-CcQaqbTeN_xc0QLnvAlXRbjZH_a1UB4bC1yg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

function opentab(id) {
  for (tab of tab_links) {
    tab.classList.remove("active-links");
  }
  for (tab of tab_content) {
    tab.classList.remove("active-tab");
  }
  document.getElementById(id).classList.add("active-tab");
  event.currentTarget.classList.add("active-links");
}

function closemenu() {
  sidemenu.style.right = "-300px";
}

function openmenu() {
  sidemenu.style.right = "0";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message send successfully";
      msg.style.color = "green";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      console.log("Success!", response);
      form.reset();
    })
    .catch((error) => {
      msg.innerHTML = "An error occured please repeat again";
      msg.style.color = "red";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      console.error("Error!", error.message);
    });
});

tab_links.forEach((element) => {
  element.classList.remove("active-tab");
  element.addEventListener("click", () => {
    element.classList.add("active-tab");
  });
});

var typed = new Typed('.auto-input', {
	strings: ["I'm Youssef Bouryal ^1000", 'Tech enthusiast', 'with a passion for', 'coding and basketball '],
	typeSpeed: 100,
	backSpeed: 100,
	loop: true,
});

