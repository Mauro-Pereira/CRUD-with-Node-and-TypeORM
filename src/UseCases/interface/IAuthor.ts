import { Request, Response } from "express";

export interface IAuthor{
    saveAuthor(request:Request,response:Response):Promise<Response>;
    getAuthor(request:Request,response:Response):Promise<Response>;
    getAuthorById(request:Request,response:Response):Promise<Response>;
    getAuthorById(request:Request,response:Response): Promise<Response>;
    deleteAuthor(request:Request,response:Response):Promise<Response>;
    updateAuthor(request:Request,response:Response): Promise<Response>;
}