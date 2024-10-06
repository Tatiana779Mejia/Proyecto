const  products = [
    { nombre: "Audifonos Color Rosa"},
    { nombre: "Audifonos Color Rosa"},
    { nombre: "Audifonos Color Negro"},
    { nombre: "Audifonos Color Negro"},
    { nombre: "Audifonos Color Negro"},
    { nombre: "Audifonos Color Verde"},
    { nombre: "Audifonos Color Rosa"},
    { nombre: "Audifonos Color Negro"},
    { nombre: "Audifonos Color Morado"},

    ];
 

 
function searchProducts(products, searchName) {
    return products.filter((product) =>
        product.nombre.toLowerCase().includes(searchName.toLowerCase()));
}
 
function showAllProducts(products) {
    const divProduct = document.getElementById("productsContainer");
    divProduct.innerHTML = "";
 
    products.forEach(product => {
        const divP = document.createElement("div");
        divP.classList.add("product");
        divP.innerHTML = `<h3>${product.nombre}</h3> <p> ${product.descripcion} </p>`;
        divProduct.appendChild(divP);
    });
 
}
 
document.getElementById("search").addEventListener("input",function(){
    const nameSearched = this.value; //document.getElementById("search").value;
    const filterProducts = searchProducts(products, nameSearched);
    showAllProducts(filterProducts);
});
 
function showSortProducts(){
    const sortProductsList = sortProducts(products);
    showAllProducts(sortProductsList)
}
 
showAllProducts(products);


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