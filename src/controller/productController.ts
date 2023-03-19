import  productService  from '../atividades/AEP/productService'
import { Request, Response } from 'express'

class productController{
    async create(req: Request, res: Response){
        await productService.writeProd(req.body)

        return res.status(201).send()
    }
    
    async list(req: Request, res: Response){
        const lista = await productService.listProducts()

        return res.status(200).send(lista)
    }

    async stock(req: Request, res: Response){
        const stock = await productService.getStock()

        return res.status(200).send(stock)
    }
}

export default new productController