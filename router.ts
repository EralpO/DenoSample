import {Router} from 'https://deno.land/x/oak/mod.ts'
import products from './db/products.ts'

const router = new Router()

//Get All the Products
router.get('/api/products',({response }:{response:any} )=>{
    response.body = {
        success:true,
        products}
 })

 //Get Single Product By Id
 router.get('/api/products/:id',({response }:{response:any} )=>{
    response.body = {
        success:true,
        products}
 })

 

 export default router
