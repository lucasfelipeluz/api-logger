# API Logger

Esta é uma API Node.js simples que registra todas as solicitações recebidas em um banco de dados MongoDB.

## Funcionalidades

- **Registro de Solicitações:** Todas as solicitações HTTP (GET, POST, PUT, PATCH, DELETE) feitas para a rota raiz (`/`) são registradas no MongoDB.
- **Armazenamento de Dados:** Os seguintes dados são armazenados para cada solicitação:
  - Método HTTP (GET, POST, etc.)
  - URL da solicitação
  - Cabeçalhos da solicitação
  - Corpo da solicitação (se houver)
  - Timestamp da solicitação

## Pré-requisitos

- Node.js instalado
- MongoDB instalado e em execução
- npm ou yarn instalado

## Configuração

1.  Clone este repositório.
2.  Instale as dependências:

    ```bash
    npm install
    ```

3.  Crie um arquivo `.env` na raiz do projeto e adicione a URL de conexão do MongoDB:

    ```
    MONGODB_URI=mongodb://localhost:27017/api-logs
    ```

## Execução

1.  Inicie o servidor:

    ```bash
    node server.js
    ```

2.  A API estará disponível em `http://localhost:5000`.

## Uso

Faça solicitações HTTP para a rota raiz (`/`) da API. Os dados da solicitação serão registrados no MongoDB.

## Estrutura do Banco de Dados

Os logs são armazenados em uma coleção chamada `logs`. Cada documento na coleção tem a seguinte estrutura:

```json
{
  "method": "GET",
  "url": "/",
  "headers": {
    "host": "localhost:5000",
    "connection": "keep-alive"
  },
  "body": {},
  "timestamp": "2023-10-27T12:00:00.000Z"
}
```
