FROM  nginx:latest
ADD . /app/
WORKDIR /app
EXPOSE 8090
VOLUME /app/data
