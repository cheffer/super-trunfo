# 🌟 Super Trunfo Mágico

Projeto fullstack para portfólio: um jogo de **Super Trunfo** com cartas mágicas 🃏✨  
Construído com **Node.js + Fastify (backend)**, **React + Vite (frontend)** e **PostgreSQL (banco de dados)**.  
Rodando localmente com **Docker Compose**.

---

## 🚀 Tecnologias
- **Backend:** Node.js, Fastify, TypeScript
- **Frontend:** React, Vite, TypeScript
- **Banco de dados:** PostgreSQL
- **Infra:** Docker, Docker Compose
- **Versionamento:** Git & GitHub

---

## 📂 Estrutura do Projeto
super-trunfo/
│── backend/ # API + regras do jogo
│── frontend/ # Interface do jogador
│── docker-compose.yml # Orquestra containers
│── .gitignore
│── README.md


---

## 🔧 Como rodar localmente (sem Docker)

### 1. Clonar repositório
```bash
git clone https://github.com/cheffer/super-trunfo.git
cd super-trunfo


### 2. Rodar Backend
cd backend
npm install
npm run dev

Backend disponível em: http://localhost:4000/health

### 3. Rodar Frontend
cd frontend
npm install
npm run dev

Frontend disponível em: http://localhost:3000

### 4. 🐳 Como rodar com Docker
docker-compose up --build

---

## 📌 Próximos Passos

 Configurar banco PostgreSQL via Docker

 Criar sistema de login/cadastro com JWT

 Criar seed inicial de cartas

 Implementar lógica de jogo vs computador

 Adicionar ranking de jogadores

 Multiplayer com WebSocket

 ---

👨‍💻 Autor: Bruno Cheffer Belinassi
📅 Início: Agosto/2025
