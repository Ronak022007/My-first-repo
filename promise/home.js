let api = "https://dummyjson.com/carts";

let parentContainer = document.getElementById("parent-container");

async function datafetch() {
    try {
        let res = await fetch(api);
        let data = await res.json();

        data.carts.forEach((cart) => {
            cart.products.forEach((product) => {
                let card = document.createElement("div");

                card.innerHTML = `
                    <h2>${product.title}</h2>
                    <p>Price: $${product.price}</p>
                    <p>Quantity: ${product.quantity}</p>
                    <p>Total: $${product.total}</p>
                    <img src="${product.thumbnail}" alt="${product.title}">
                `;

                parentContainer.appendChild(card);
            });
        });

    } catch (error) {
        console.log("Error:", error);
    }
}

datafetch();