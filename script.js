const form = document.getElementById("jobForm");
const successMsg = document.getElementById("successMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Fake delay for UX
  setTimeout(() => {
    successMsg.classList.remove("hidden");
    form.reset();
  }, 500);
});

const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, ""); // remove non-digits
  if (value.length > 10) value = value.slice(0, 10);

  let formatted = value;
  if (value.length > 6) {
    formatted = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
  } else if (value.length > 3) {
    formatted = `(${value.slice(0, 3)}) ${value.slice(3)}`;
  } else if (value.length > 0) {
    formatted = `(${value}`;
  }

  e.target.value = formatted;
});




const coverLetter = document.getElementById("coverLetter");
const charCount = document.getElementById("charCount");

coverLetter.addEventListener("input", () => {
  const length = coverLetter.value.length;
  charCount.textContent = `${length} / 2000`;

  if (length < 150 || length > 2000) {
    charCount.classList.add("error");
  } else {
    charCount.classList.remove("error");
  }
});

// prevent submission if invalid length
form.addEventListener("submit", (e) => {
  const length = coverLetter.value.length;
  if (length < 150 || length > 2000) {
    e.preventDefault();
    alert("❌ Cover letter must be between 150 and 2000 characters.");
    return;
  }

  // Fake success
  setTimeout(() => {
    successMsg.classList.remove("hidden");
    form.reset();
    charCount.textContent = "0 / 2000";
    charCount.classList.remove("error");
  }, 500);
});



