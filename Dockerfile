FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm install

USER node

CMD [ "npm", "start" ]

EXPOSE 3000
