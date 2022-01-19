FROM node:16

#React project copy
RUN mkdir /app
WORKDIR /app
ADD package.json .
ADD package-lock.json .
RUN npm install
COPY . .
RUN node init.js
RUN npm run build
ENTRYPOINT [ "npm","start" ]