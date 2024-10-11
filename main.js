document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const productCards = document.querySelectorAll(".card-product");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();

        productCards.forEach(card => {
            const productName = card.querySelector("h3").textContent.toLowerCase();
            // Verifica si el nombre del producto incluye la consulta
            if (productName.includes(query)) {
                card.style.display = ""; // Muestra el producto
            } else {
                card.style.display = "none"; // Oculta el producto
            }
        });
    });
});
    
    document.getElementById("searchInput").addEventListener("input", function () {
        const searchTerm = this.value.toLowerCase();
        const filteredProducts = searchProducts(products, searchTerm);
        showSuggestions(filteredProducts);
    });
    
    
    document.getElementById("searchButton").addEventListener("click", function () {
        const searchTerm = document.getElementById("searchInput").value.toLowerCase();
        const filteredProducts = searchProducts(products, searchTerm);
        showAllProducts(filteredProducts);
        document.getElementById("suggestions").style.display = "none"; 
    });
    
    
    document.addEventListener("DOMContentLoaded", () => showAllProducts(products));

// Obtener los enlaces del menú desplegable
const instagramLink = document.getElementById("instagramLink");
const facebookLink = document.getElementById("facebookLink");
const twitterLink = document.getElementById("twitterLink");

// Redireccionar a las páginas de login correspondientes
instagramLink.addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/accounts/login/";
});

facebookLink.addEventListener("click", () => {
    window.location.href = "https://www.facebook.com/login/";
});

twitterLink.addEventListener("click", () => {
    window.location.href = "https://twitter.com/login";
});