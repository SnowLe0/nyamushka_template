# ReactJS Template
##### Запуск приложения React:
###### Вариант #1 (предпочтительный)
Не создаёт промежуточные образы и слои, которые занимают место и требуют времени для сборки
1. Загрузить образ Docker
```sh
$ docker load < reactapp_v0.1.tar.gz
```
2. Запустить контейнер с данным образом
```sh
$ docker run -d -p 3000:80 --name reactapp reactapp:v0.1
```
###### Вариант #2
1. Собрать образ из Dockerfile
```sh
$ docker build -t reactap:v0.1 ./
### Альтернативный вариант сборки через docker-compose
$ docker-compose build reactapp_service
```
2. Запуск контейнера аналогичен Варианту #1 п.2
###### Вариант #3
С использованием только `docker-compose`
```sh
$ docker-compose up -d
### Данная команда соберёт и сразу запустит контейнер
```
Готовое приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000)

Также готовый результат можно увидеть по ссылке [https://SnowLe0.github.io/nyamushka_template/](https://SnowLe0.github.io/nyamushka_template/)