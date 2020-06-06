

![enter image description here](https://user-images.githubusercontent.com/38081852/83580830-6f63e200-a513-11ea-9a27-0a109ec1e4d0.png)


# Objetivo
O projeto tem como finalidade a **conexão** entre **locais de coleta de resíduos** (orgânicos e inorgânicos) e **pessoas e/ou entidades** que necessitam constantemente descartar esses resíduos, solucionando um problema recorrente que é o **descarte inadequado do lixo**, facilitando o processo de reciclagem e reutilização.

# Tecnologias

   **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))
-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Leaflet](https://react-leaflet.js.org/en/)**
-   **[React Leaflet](https://react-leaflet.js.org/)**

**Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[KnexJS](http://knexjs.org/)**
-   **[SQLite](https://github.com/mapbox/node-sqlite3)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
#### **Utilitários**

-   Protótipo:  **[Figma](https://www.figma.com/)**  →  **[Protótipo (Ecoleta)](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta)**
-   API:  **[IBGE API](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1)**  →  **[API de UFs](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet)**,  **[API de Municípios](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-Municipios-estadosUFMunicipiosGet)**
-   Maps:  **[Leaflet](https://react-leaflet.js.org/en/)**
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Teste de API:  **[Insomnia](https://insomnia.rest/)**
-   Ícones:  **[Feather Icons](https://feathericons.com/)**
-   Fontes:  **[Ubuntu](https://fonts.google.com/specimen/Ubuntu)**,  **[Roboto](https://fonts.google.com/specimen/Roboto)**

### **Executando o Projeto**
> Para clonar e utilizar essa aplicação, você ira precisar ter instalado em sua máquina as seguintes ferramentas: **[Git](https://git-scm.com/), [Node.js](https://nodejs.org/)**
> Editor de texto recomendado : **[VSCode](https://code.visualstudio.com/)**

#### **Clone o repositório**
> git clone https://github.com/Ptdavid0/NLW.git

#### **Backend**

> 1. $cd server
> 2. $npm install
> 3. $npm run migrate:latest (criação do banco de dados)
> 4. $npm run migrate:seed (populando a base de dados com itens estatáticos)
> 5. $npm run dev

####  **Frontend**

> 1. $cd web
> 2. $npm install
> 3. $npm start
> 4. Caso a pagina não abra automaticamente, acesse, no seu navegador, localhost:3000

#### **Mobile**

> 1. $cd mobile
> 2. $npm install
> 3. npm start
> 4. bra o aplicativo Expo no seu dispositivo móvel
> 5. Escaneie o QR Code
