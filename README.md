# CRUD em Node Usando Typescript e TypeORM

No dia a dia de um programador, é quase impossivel não se deparar com uma palavrinha muito curta, porém muito recorrente no mundo da programação, CRUD, um acrônimo para as palavras em inglês CREATE, READ, UPDATE e DELETE (criar, ler, atualizar e deletar em português). Ambas as palavras remetem a uma ação que, no mundo da programação, ganha ares muito importante.

![](/screenshot/controller.png)


# Objetivo do Projeto

Aprofundar meus estudos em Node.js usando Typescript.


# Como está organizado o projeto?

O está divido da seguinte forma: 

pasta SRC: contém todos os arquivos e pastas principais, incluindo o arquivo index.ts e o arquivo 
route.ts.

pasta CONTROLLER: contém o arquivo AuthorController.ts, nela criamos um objeto da classe AuthorDAO e chamamos os métodos responsáveis por fazer o CRUD por meio dele.

pasta ENTITY: contém a classe Author.ts, essa classe serve como modelo para minha tabela no banco de dados MySQL (banco que eu usei neste projeto).

pasta USECASES: contém duas pasta, AuthorDAO e a pasta interface.

pasta AuthorDAO: contém a classe AuthorDAO.ts que implementa a interface IAuthor.ts, basicamente ela é responsável por fazer o CRUD.

pasta INTERFACE: contém a interface IAuthor.ts, essa interface é usada na classe AuthorDAO.