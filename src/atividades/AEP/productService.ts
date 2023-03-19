import { writeFile, readFile } from 'fs/promises'

 class productService{

    async writeProd(data){
        await writeFile('products.json', JSON.stringify(data, null, 2))
    }

    async listProducts(){
        const productList = await readFile('products.json',"utf-8")

        return JSON.parse(productList)
    }

    async getStock(){
        const productList = await this.listProducts()

        const stockProducts = productList.map(item => {
            let stock = {
                nome: item.nome,
                qtde: item.qtde,
                preco: item.preco,
                valorStock: item.qtde * item.preco
            } 
            return stock
        })
        return stockProducts
    }
 }

 export default new productService
