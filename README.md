# 🚀 Blog API - Capacitação Backend (NestJS)

Esta é uma API RESTful robusta desenvolvida como parte da capacitação em Backend. O sistema simula o core de um Blog, permitindo a gestão de usuários, postagens e comentários com autenticação e validações rigorosas.

## 🛠️ Stack Tecnológica
* **Linguagem:** TypeScript
* **Framework:** NestJS
* **Banco de Dados:** PostgreSQL
* **ORM:** TypeORM
* **Autenticação:** JWT (JSON Web Tokens) + Passport
* **Validação:** Class Validator / Class Transformer
* **Infraestrutura:** Docker

## ✨ Funcionalidades Implementadas
- **Autenticação:** Cadastro de usuários e login com geração de Token JWT (senhas com hash bcrypt).
- **Postagens:** CRUD completo de posts. Apenas usuários logados criam posts. Inclui paginação de resultados.
- **Comentários:** Sistema de comentários vinculados a postagens e usuários específicos.
- **Segurança:** Rotas protegidas por Guards do NestJS. CORS habilitado para integração futura com Frontend (Next.js).

## ⚙️ Como rodar o projeto localmente

### 1. Pré-requisitos
* Node.js (v16 ou superior)
* Docker e Docker Compose (para o banco de dados)
* Insomnia ou Postman (para testar as rotas)

### 2. Configuração do Ambiente
Clone o repositório e instale as dependências:
```bash
git clone <https://github.com/nunoguerra1/capacitacao-backend-nestjs>
cd <capacitacao-backend-nestjs>
npm install
```
### 3. Banco de Dados (Docker)
Suba o container do PostgreSQL rodando o comando:
```bash
docker compose up -d
```

### 4. Rodando a Aplicação
Com o banco rodando e dependências instaladas, inicie o servidor:
```bash
npm run start:dev
```
### 5. Testando as Rotas
Na raiz deste projeto, você encontrará o arquivo insomnia_collection.json.
Basta importá-lo no seu Insomnia para ter acesso a todas as rotas de Usuários, Auth, Posts e Comentários já configuradas.
