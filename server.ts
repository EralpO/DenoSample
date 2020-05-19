import {Application,Router} from 'https://deno.land/x/oak/mod.ts'
import router from './router.ts'
const app = new Application()



app.use(router.routes())
app.use(router.allowedMethods())



console.log('Server running on port 5000')

await app.listen({port : 5000})