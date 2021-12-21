FROM node:14

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm install -g nodemon

EXPOSE 3000

CMD [ "npm", "start" ]
