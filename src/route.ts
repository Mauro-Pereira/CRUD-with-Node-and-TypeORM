import {Router,Request,Response} from 'express';
import {deleteAuthor, getAuthor, getAuthorById, saveAuthor, updateAuthor} from './controller/AuthorController'

const router = Router();

router.get("/",(request:Request,response:Response) =>{
    return response.status(200).json("hello world")
});

router.post("/saveAuthor",(request:Request,response:Response)=> saveAuthor);

router.get("/getAuthor",(request:Request,response:Response)=> getAuthor);

router.get("/getAuthorById",(request:Request,response:Response)=> getAuthorById);

router.post("/deleteAuthor:id",(request:Request,response:Response)=> deleteAuthor);

router.post("/updateAuthor:id",(request:Request,response:Response)=> updateAuthor);

export default router;