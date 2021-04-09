import {getRepository} from 'typeorm';
import {Author} from '../entity/Author';
import {Request,Response} from 'express';


export const saveAuthor = async (request:Request,response:Response) =>{

    const author = await getRepository(Author).save(request.body);
    return response.status(201).json(author);
}

export const getAuthor = async (request:Request,response:Response) =>{
    const getAuthor = await getRepository(Author).find();
    return response.status(200).json(getAuthor);
}

export const getAuthorById = async (request:Request,response:Response) =>{
   const {id} = request.params;
    const author  = await getRepository(Author).findOne(id)
    return response.status(200).json(author);
}

export const deleteAuthor = async (request:Request,response:Response) =>{
        
    const {id} = request.params;
    const authorDeleted = await getRepository(Author).delete(id);
    return response.status(200).json(authorDeleted);
}

export const updateAuthor = async (request:Request,response:Response) =>{
    const {id} = request.params;
    const {firstName,lastName,age,email} = request.body;
    const updatedAuthor = await getRepository(Author).update(id,{firstName:firstName,lastName:lastName,age:age,email:email});
    return response.status(200).json(updatedAuthor);
}