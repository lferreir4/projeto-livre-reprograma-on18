# Projeto Livre on-18 {reprograma}

## One Piece Project :rowboat: :pirate_flag:

## Inspiração

Esta API foi desenvolvida como Projeto Final de conclusão do curso Todas Em Tech Backend {reprograma}, a proposta era criar um API aplicando CRUD com tema livre.

Como grande fã de animes em geral, resolvi destacar um dos animes que mais gosto devido à mensagem espectacular de perseverança diante das dificuldade que todas nós vivemos.
Me identifico bastante com a personagem Nico Robin, pois sua trajetória de vida se apresenta com uma das mais difíceis e encantadoras do anime.
Com a {reprograma} aprendi a necessidade de um bom trabalho em equipe e que, com esforço e força de vontade, podemos construir grandes projetos se apoiando e se desenvolvendo juntas.

Essa é a mensagem que One Piece passa, o trabalho em equipe!
![fcXdJlbSdUEeMSJFsXKsznGwwok](https://user-images.githubusercontent.com/68795916/206922385-09a38f1e-44a2-45fa-893d-b0a64e669928.jpg)

## Descrição da API

O projeto é uma API REST que permite realizar o cadastro, alteração, busca, e exclusão do perfil dos piratas que estão a bordo no navio Thousand Sunny.

## Funcionalidades

- Cadastro dos piratas;
- Filtro por ID.

## Funcionalidades Futuras

- Login com API do Linkedin, Github, Facebook e Gmail;
- Abrir para outras áreas de estudos.

## Arquitetura Modelo MVC

![op](https://user-images.githubusercontent.com/68795916/207856106-99904c88-3626-4cad-a84e-fe65633d5537.jpeg)

## Instalação

Para a instalação do projeto siga as instruções:
Pré-requisitos
É necesário possuir instalado as ferramentas:

- Git
- Node.js
- database NoSQL Mongodb
- IDE de sua preferencia, para a criação deste projeto foi utilizado o VSCode.
  Rodando o Projeto
- Clone este projeto

       $ git clone https://github.com/lferreir4/projeto-livre-reprograma-on18

- Acesse o repositório local

       $ cd one-piece

- Instale as dependências
  $ npm install
  Crie um arquivo .env conforme o .env.example e adicione os valores as variáveis de ambiente.
- Execute o servidor
  $ npm run start

# Tecnologias utilizadas

- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/home)
- [Insomminia](https://insomnia.rest/download)
- [VSCode](https://code.visualstudio.com/download)

# Pacotes utilizados

- [mongoose](https://mongoosejs.com/)
- [nodemon](https://nodemon.io/)
- [express](https://expressjs.com/pt-br/)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

## Rotas

### Localhost

| Método HTTP | Tipo Rota | Endpoint               | Descrição                        |
| :---------- | :-------: | :--------------------- | :------------------------------- |
| GET         |  Pública  | http://localhost:1999/ | Mensagem de apresentação (Index) |

### Rotas perfis

| Método HTTP | Tipo Rota | Endpoint                                | Descrição                            |
| :---------- | :-------: | :-------------------------------------- | :----------------------------------- |
| GET         |  Pública  | http://localhost:1999/pirates/all       | Lista de todos os perfis cadastrados |
| POST        |  Pública  | http://localhost:1999/pirates/create    | Criar perfil                         |
| DELETE      |  Pública  | http://localhost:1999/pirates/delete/id | Deletar perfil                       |
| PUT         |  Pública  | http://localhost:1999/pirates/update/id | Alterar perfil                       |
| GET         |  Pública  | http://localhost:1999/pirates/id        | Procurar perfil por ID               |
