import {Router,Request,Response} from 'express';
import {deleteAuthor, getAuthor, getAuthorById, saveAuthor, updateAuthor} from './controller/AuthorController'

const router = Router();

router.get("/",(request:Request,response:Response) =>{
    return response.status(200).json("hello world")
});

router.post("/saveAuthor",(request:Request,response:Response)=> saveAuthor(request,response));

router.get("/getAuthor",(request:Request,response:Response)=> getAuthor(request,response));

router.get("/getAuthorById/:id",(request:Request,response:Response)=> getAuthorById(request,response));

router.delete("/deleteAuthor/:id",(request:Request,response:Response)=> deleteAuthor(request,response));

router.put("/updateAuthor/:id",(request:Request,response:Response)=> updateAuthor(request,response));

export default router;