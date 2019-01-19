FROM nginx:1.15.8-alpine

ENV LAST10_URL https://api.gregkurts.net/last

COPY dist /usr/share/nginx/html