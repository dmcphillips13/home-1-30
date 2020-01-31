const offeringsPromise = fetch('https://acme-users-api-rev.herokuapp.com/api/offerings')
    .then(response => response.json())


const companiesPromise = fetch('https://acme-users-api-rev.herokuapp.com/api/companies')
    .then(response => response.json())

const productsPromise = fetch('https://acme-users-api-rev.herokuapp.com/api/products')
    .then(response => response.json())


Promise.all([offeringsPromise, companiesPromise, productsPromise])
    .then(response => {
        const [offerings, companies, products] = response;

        products.map(product => {
            product.offerings = [];
            
            product.offerings.push()
            offerings.forEach(offering => {
                if (product.id === offering.productId) {
                    product.offerings.push(offering);
                }
            })
        })

        console.log(products)
    })


function renderProducts(productsArr) {
    const list = document.querySelector('.listoflists');

    let html = productsArr.map(product => {
        return `
            <ul class='product'>
                <li class='product-name'>${product.name}</li>
                <li>${product.description}</li>
                <li>$${product.suggestedPrice}.00</li>
            </ul>`
    }).join('')

    list.innerHTML = html;
}

productsPromise.then(response => renderProducts(response));
