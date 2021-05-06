<!-- LOGO -->
<br />
<p align="center">
  <a href="https://github.com/felipe-b-oliveira/ocean-nps">
    <img src="/docs/images/icon.svg" alt="nps logo" width="80" height="80">
  </a>

  <h3 align="center">Sistema de avaliação</h3>

  <p align="center">
    Projeto de estudo referente a NLW#4 da Rocketseat
    <br />
    <br />
    <a href="https://github.com/felipe-b-oliveira/ocean-nps">Ver Demo</a>
    ·
    <a href="https://github.com/felipe-b-oliveira/ocean-nps/issues">Reportar Bug</a>
    ·
    <a href="https://github.com/felipe-b-oliveira/ocean-nps/issues">Requisitar Feature</a>
  </p>
</p>

<!-- TABELA DE CONTEÚDO -->
## Tabela de Conteúdo

* [Sobre o Projeto](#sobre-o-projeto)
  * [Tecnologias](#tecnologias)
* [Iniciando](#iniciando)
  * [Pre Requisitos](#pre-requisitos)
  * [Instalação](#instalação)
* [Endpoints](#endpoints)
* [Contribuindo](#contribuindo)
* [Licença](#licença)
* [Contato](#contato)

<!-- SOBRE O PROJETO -->
## Sobre o Projeto

Projeto de estudo referente a um sistema backend de atribuição e avaliação de notas com cálculo de nps.

## Tecnologias

Lista de principais ferramentas utilizadas no projeto. 

* [NodeJS](https://nodejs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Jest](https://jestjs.io/)
* [Handlebars](https://handlebarsjs.com/)

<!-- INNICIANDO -->
## Iniciando

Instruções de como configurar e executar o projeto localmente.

### Pre Requisitos

O projeto utiliza o Yarn, você pode conferir como instalá-lo em seu sistema aqui:
[Yarn Installation](https://classic.yarnpkg.com/en/docs/install/)

### Instalação

1. Clone o repositório usando o comando abaixo:
```sh
git clone https://github.com/felipe-b-oliveira/ocean-nps
```
2. Acesse a pasta do projeto e dentro da mesma execute o comando: 
```sh
yarn install
```
3. Execute o comando abaixo para executar o projeto
```sh
yarn dev
```

## Endpoints

###     Users

-   Create: `POST   /users`          


###     Surveys

-   Create: `POST   /surveys`       

-   GetAll:   `GET   /surveys`  

###     SendMail

-   Execute: `POST   /sendMail`

###     Answers

-   GetAll: `GET   /answers/:value`

###     NPS

-   FindById: `GET   /nps/:survey_id`  

<!-- CONTRIBUTING -->
## Contribuindo

Contribuições são muito bem vindas 😎.

1. Faça Fork desse repositório;
2. Crie uma branch com a sua feature: `git checkout -b feature/MinhaFeature`
3. Commit suas mudanças: `git commit -m 'feat: Minha nova feature'`
4. Push a sua branch: `git push origin feature/MinhaFeature`
5. Abra uma Pull Request

<!-- LICENÇA -->
## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<!-- CONTATO -->
## Contato

<p align="center">

 <a href="https://twitter.com/FelipeOliveir9" target="_blank" >
     <img alt="Twitter" src="https://img.shields.io/badge/-Twitter-9cf?style=flat-square&logo=Twitter&logoColor=white"></a>

  <a href="https://www.linkedin.com/in/felipe-oliveira-417376100/" target="_blank" >
    <img alt="Linkedin" src="https://img.shields.io/badge/-Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white"></a>

  <a href="mailto:felipe.boliveira@outlook.com" alt="Gmail">
    <img src="https://img.shields.io/badge/-felipe.boliveira@outlook.com-0078D4?style=flat-square&labelColor=0078D4&logo=gmail&logoColor=white&link=felipe.boliveira@outlook.com"/></a>

</p>

---

Feito por **Felipe Oliveira**

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[home]: 