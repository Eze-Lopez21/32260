const ProductManager = require('./ProductManager');

const manager = new ProductManager('products.json');

const main = async () => {
    let product1 = {
        title: "Hamburguesa Simple",
        description: "Hambuerguesa de una carne con queso, sin ningún condimento especial añadido.",
        price: 200,
        thumbnail: '-',
        code: "123",
        stock: 30,
    };
    let product2 = {
        title: "Hamburguesa Completa",
        description: "Hambuerguesa de dos carnes con queso, lechuga, tomate y la salsa especial Sazón.",
        price: 300,
        thumbnail: '-',
        code: "456",
        stock: 20,
    };
    let product3 = {
        title: "Hamburguesa Bacon",
        description: "Hambuerguesa de dos carnes, queso cheddar y una lluvia de bacon, con salsa barbecue y la salsa especial Sazón.",
        price: 350,
        thumbnail: '-',
        code: "789",
        stock: 20,
    };
    let product4 = {
        title: "Hamburguesa Triple",
        description: "Hambuerguesa de tres carnes con queso, lechuga, tomate, bacon y la salsa especial Sazón.",
        price: 400,
        thumbnail: '-',
        code: "101",
        stock: 15,
    };

    await manager.addProduct(product1)
    await manager.addProduct(product2)
    await manager.addProduct(product3)
    await manager.addProduct(product4)
    console.log(await manager.getProducts())
};

main()