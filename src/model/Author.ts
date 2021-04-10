export class Author{
    private firstName: string;
    private lastName: string;
    private age: number;
    private email: string;

    constructor(firstName:string,lastName:string,age:number,email:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    setFistName(firstName:string): void{
        this.firstName = firstName;
    }

    getFirstName():string{
        return this.firstName;
    }

    setLastName(lastName:string):void{
        this.lastName = lastName;
    }

    getLastName():string{
        return this.lastName;
    }

    setEge(ege:number):void{
        this.age = ege;
    }

    getEge():number{
        return this.age;
    }

    setEmail(email:string):void{
        this.email = email;
    }

    getEmail():string{
        return this.email;
    }

}