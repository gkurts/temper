FROM node:11.7.0 as builder
WORKDIR /usr/src/app/
ENV LAST10_URL https://temperapi.gregkurts.tech/last
COPY package*.json ./
RUN npm install
COPY src ./src
RUN npm run build


FROM nginx:1.15.8-alpine
COPY --from=builder /usr/src/app/dist/* /usr/share/nginx/html/