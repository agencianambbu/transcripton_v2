# Usando uma imagem base do Node.js para construir a aplicação
FROM node:18 AS build

# Definindo o diretório de trabalho no contêiner
WORKDIR /app

# Copiando o package.json e o package-lock.json (ou yarn.lock)
COPY package*.json ./
COPY yarn.lock ./

# Instalando as dependências
RUN npm install

# Copiando o restante do código da aplicação
COPY . .

# Rodando o build da aplicação para produção
RUN npm run build