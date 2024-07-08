# Development stage
FROM node:20-alpine AS dev
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "run", "dev"]

# Production stage
FROM node:20-alpine AS prod
WORKDIR /app
COPY package.json .
RUN npm install --only=production
COPY . .
RUN npm install typescript -g 
CMD ["npm", "start"]
