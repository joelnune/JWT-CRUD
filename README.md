# JWT-CRUD


 Status do Projeto: Em desenvolvimento ⚠️

## Pacotes utilizados neste projeto:

[Nestjs Framework](https://docs.nestjs.com/) - Tenha uma aplicação nodejs+TypeScript em segundos.

[Postgresql](https://www.postgresql.org/) - Banco relacional e resilente

## Projeto

O JWT-CRUD É uma API que permite o usuário fazer operações basicas em um banco de dados de cadastro de filmes, possuindo autenticação via JWT.

## Instalaçao

> Este projeto requer [Node.js](https://nodejs.org/) v18.14+ para rodar.
>
> Instale as dependencias e execute o app:

```sh
npm i
npm run start
```
## Como usar
1. Faça o login via postman ou insomnia com os parametros indicados na imagem.
![111](https://github.com/joelnune/JWT-CRUD/assets/91698993/401d4db2-da35-4d02-912e-c66cae3e39f0)

2.Cole o Token gerado anteriormente no campo indicado
![2222](https://github.com/joelnune/JWT-CRUD/assets/91698993/90970a7b-e62f-4fdb-9d4f-d42e94293436)

Rotas:

[GET] /movies
Exibir lista de filmes

[GET] /movies/:id
Buscar filme especifico

[POST] /movies
Criar filme
#Exemplo:
    {
        "release": "2024-02-02",
        "id": 13,
        "title": "Filme legal de Drama",
        "description": "Muito dramatico",
        "genre": "Drama"
    }

[PATCH] /movies:id
Atualizar filme
#Exemplo:
    {
        "release": "2024-02-02",
        "id": 13,
        "title": "Filme legal de Drama",
        "description": "Muito dramatico e atualizado",
        "genre": "Drama"
    }

[DELETE] /movies/:id
Deletar filme


License

MIT

**Free Software, Hell Yeah!**

</p>
