// DARK MODE
const toggle = document.getElementById("themeToggle");

if (toggle) {
toggle.onclick = () => {
document.body.classList.toggle("dark");
localStorage.setItem("dark", document.body.classList.contains("dark"));
};
}

// LOAD MODE
if (localStorage.getItem("dark") === "true") {
document.body.classList.add("dark");
}

// TESTIMONIAL SLIDER
let i = 0;
const t = document.querySelectorAll(".testimonial");

setInterval(() => {
if (t.length) {
t.forEach(x => x.classList.remove("active"));
t[i].classList.add("active");
i = (i + 1) % t.length;
}
}, 3000);

// FILTER
function filter(cat){
document.querySelectorAll(".item").forEach(el=>{
el.style.display = (cat==="all" || el.classList.contains(cat)) ? "block":"none";
});
}

// MODAL
function openModal(el){
document.getElementById("modal").style.display="flex";
document.getElementById("modalImg").src =
el.querySelector("img").src;
}

// CONTACT FORM (EMAILJS)
document.getElementById("contactForm")?.addEventListener("submit", function(e){
e.preventDefault();

emailjs.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",{
name:document.getElementById("name").value,
email:document.getElementById("email").value,
message:document.getElementById("message").value
});

alert("Message sent!");
});