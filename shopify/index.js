let productSection = document.getElementById('productSection');

function displayProducts(productObject){
    console.log(productObject)
    let productCard = document.createElement('div');
    productCard.classList.add('product-card')
    productSection.appendChild(productCard);

    let productImg = document.createElement('img');
    productImg.setAttribute('src', `${productObject.image}`)
    productImg.classList.add('product-image')
    productCard.appendChild(productImg)

    let badgeTextEl = document.createElement('p');
    badgeTextEl.textContent = productObject.badge_text
    badgeTextEl.classList.add('badge-text')



}

function displayWomenProducts(object){
    womenProducts = object.category_products
    // console.log(womenProducts)
    for (let productObject of womenProducts){
        displayProducts(productObject)
    }
    
}

fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    categories = data.categories
    menProductsObject = categories[0]
    womenProductsObject = categories[1]
    kidsProductsObject = categories[2]
    displayWomenProducts(womenProductsObject)
})