# Используйте официальный образ OpenJDK в качестве базового образа
FROM openjdk:11-jre-slim

# Установите рабочий каталог внутри контейнера
WORKDIR /app

# Скопируйте JAR файл в рабочий каталог
COPY target/citlab-0.0.1-SNAPSHOT.jar app.jar

# Установите порт, который будет использоваться приложением
EXPOSE 8081

# Команда для запуска Spring Boot приложения
ENTRYPOINT ["java", "-jar", "app.jar"]
