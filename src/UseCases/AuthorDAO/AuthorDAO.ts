import { Request, Response } from "express";
import { IAuthor } from "../interface/IAuthor";
import {Author} from "../../entity/Author";
import { getRepository } from "typeorm";

export class AuthorDAO implements IAuthor{
    
   async saveAuthor(request:Request, response:Response): Promise<Response>{    
        const author = await getRepository(Author).save(request.body);
        return response.status(201).json(author);
    }

  async getAuthor(request:Request,response:Response){
      const getAuthor = await getRepository(Author).find();
      return response.status(200).json(getAuthor);
  }


  async getAuthorById(request:Request,response:Response){
     const {id} = request.params;
     const author  = await getRepository(Author).findOne(id)
     return response.status(200).json(author);
 }

 async deleteAuthor(request:Request,response:Response){    
  const {id} = request.params;
  const authorDeleted = await getRepository(Author).delete(id);
  return response.status(200).json(authorDeleted);
  
}

async updateAuthor(request:Request,response:Response){
  const {id} = request.params;
  const {firstName,lastName,age,email} = request.body;
  const updatedAuthor = await getRepository(Author).update(id,{firstName:firstName,lastName:lastName,age:age,email:email});
  return response.status(200).json(updatedAuthor);

  
}

}