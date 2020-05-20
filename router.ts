import {Router} from 'https://deno.land/x/oak/mod.ts'
import products from './db/products.ts'
import { Product } from './db/types.ts'
import {v4} from 'https://deno.land/std/uuid/mod.ts'

const router = new Router()

//Get All the Products
router.get('/api/products',({response }:{response:any} )=>{
    response.body = {
        success:true,
        products}
 })

 //Get Single Product By Id
 router.get('/api/products/:id',async ({ params,response }:{params :{id:string} ,response:any }) =>{
    const product : Product | undefined = await products.find(p => p.id === params.id)
    if(product){
        response.status = 200
        response.body = {
            success : true,
            data : product
        }
    }
    else {
        response.body = {
            msg : 'no Product found'
        }
    }
    
 })

 //Add a Product to Db
   router.post('/api/products/add',async ({request,response}:{request:any,response:any})=>{
       let body = await request.body();
       if(request.hasBody){
        let product  : Product = body.value
        product.id = v4.generate()
        products.push(product)
        
        response.body ={
            success:true,
            msg: product
        }
       }
       else{
           response.body = {
               msg:'No data'
           }
       }

   })

 

 export default router
