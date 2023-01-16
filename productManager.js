const fs = require('fs');

class ProductManager{
    products;
    constructor(file){
        this.products = file;
    };
    async getId(){
        let count = 0;
        const getData = await this.getProducts()
        getData.forEach(product =>{
            if (product.id > count) {
                count = product.id;
            };
        }); return count + 1;
    };
    async addProduct(product){
        try {
            const getData = await this.getProducts();
            getData.push({ ...product, id: await this.getId() });
            await fs.promises.writeFile(this.file, JSON.stringify(getData));
        } catch (error) {
            console.log(error);
        };
    };
    async getProducts(){
        try {
            const data = await fs.promises.readFile(this.file, "utf-8");
            return JSON.parse(data);
        } catch (error) {
            console.log(error);
        }
    };
    async getProductById(id){
            const getData = await this.getProducts();
            return getData.find(item => item.id == id); //
    };
    async updateProduct(id, product){
        try {
            const getData = await this.getProducts();
            const findId = getData.findIndex(productId => productId.id === id) //
            product.id = id
            getData.splice(findId, 1, product) //
            await fs.promises.writeFile(this.file, JSON.stringify(getData))
        } catch (error) {
            console.log(error);
        };
    };
    async deleteProduct(id){
        const getData = await this.getProducts();
        const filterData = getData.filter(product => product.id !== id);
        await fs.promises.writeFile(this.file, JSON.stringify(filterData));
    };
};

module.exports = ProductManager;