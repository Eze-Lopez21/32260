class ProductManager{
    constructor(){
        this.products = [];
    };
    getId(){
        return this.products.length + 1;
    }
    addProduct(title, description, price, thumbnail, code, stock){
        // compruebo que el codigo no sea repetido
        if (this.products.some(product => product.code == code)){
            console.log("Codigo ya existente.")
        } else {
            // compruebo que el usuario complete todos los campos
            if (title && description && price && thumbnail && code && stock){
                let newProduct = {
                    id: this.getId(),
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock
                };
                this.products.push(newProduct);
            } else {
                console.log("Por favor, complete todos los campos.")
            };
        };
    };
    getProducts(){
        return this.products;
    };
    getProductById(id){
        if (this.products.find(product => product.id == id)){
            return;
        } else {
            console.error("Not found")
        };
    };
};

const manager = new ProductManager();
manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin Imagen", "abc123", 25)
// console.log(manager.getProducts())
manager.addProduct("otro producto prueba", "Este es un producto prueba", 300, "Sin Imagen", "def456", 20)
console.log(manager.getProducts())