export class Product {


    prodId:number
    prodName:string
    price:number
    description:string
    category:string
    qoh:number
    constructor(prodName:string, 
                price:number,
                 description:string, 
                 category:string, 
                 qoh:number)
                 {
                     this.prodName=prodName
                     this.price=price
                     this.description=description
                     this.category = category
                     this.qoh = qoh
                 }
                

}
