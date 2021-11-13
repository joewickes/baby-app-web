FROM node:16 AS dev

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json ./package-lock.json ./

RUN npm install

COPY ./public ./public

COPY ./src ./src

RUN npm run build

CMD ["npm", "start", "watch"]

# Production
# FROM node:10.11.0-jessie

# RUN npm install -g serve

# COPY --from=dev /app/build build

# CMD ["serve", "-s", "build"]