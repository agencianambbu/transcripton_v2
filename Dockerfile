# Usando uma imagem base do Node.js
FROM node:18

# Definindo o diretório de trabalho no contêiner
WORKDIR /

# Copiando o package.json e o package-lock.json (se disponível)
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando o restante do código da aplicação
COPY . .

# Expondo a porta que o Vite utiliza
EXPOSE 5173

# Comando para rodar o app em modo de desenvolvimento
CMD ["npm", "run", "dev"]
