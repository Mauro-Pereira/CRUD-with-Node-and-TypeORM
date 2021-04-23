import {getRepository} from 'typeorm';
import {Author} from '../entity/Author';
import {Request,Response} from 'express';
import { AuthorDAO } from '../UseCases/AuthorDAO/AuthorDAO';


export const saveAuthor = async (request:Request,response:Response) =>{

    const authorSave = new AuthorDAO()
    return authorSave.saveAuthor(request,response);
}

export const getAuthor = async (request:Request,response:Response) =>{
    const authorGet = new AuthorDAO();
    return authorGet.getAuthor(request,response)
}

export const getAuthorById = async (request:Request,response:Response) =>{
    const authot_getById = new AuthorDAO();
    return authot_getById.getAuthorById(request,response)
}

export const deleteAuthor = async (request:Request,response:Response) =>{
        
    const authorDelete = new AuthorDAO();
    return authorDelete.deleteAuthor(request,response);
}

export const updateAuthor = async (request:Request,response:Response) =>{
    const authorUpdate = new AuthorDAO();
    return authorUpdate.updateAuthor(request,response);


}