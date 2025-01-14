document.addEventListener("DOMContentLoaded", function() {
    // Adiciona interatividade ao clicar nas seções
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.addEventListener("click", () => {
            alert(`Você clicou na seção: ${section.querySelector('h2').textContent}`);
        });
    });

    // Animação ao passar o mouse nos links do menu
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ffeb3b";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "white";
        });
    });

    console.log("Portfólio carregado com sucesso.");
});
