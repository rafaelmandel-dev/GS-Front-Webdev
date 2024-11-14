//tentativa de um modo dark
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", themeToggle.checked);
});

//navgaciones para pesnamentos futuros
function navigateTo(sectionId) {
    //rolagem pra onde eu quero ir
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}