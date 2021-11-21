<h1 align="center">Https server<h1>

# Запуск

Для запуска https сервера вам понадобится получить сертификат и ключ openSSL. Если у вас установден Git по стандартной директории, то вы можете получить его с помощью встроенного openSSL. Для этого откройте консоль и выполните данную команду:

```
"C:/Program Files/Git/usr/bin/openssl.exe"
req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' -keyout localhost-privkey.pem -out localhost-cert.pem
```

затем поместите файлы `localhost-privkey.pem` и `localhost-cert.pem` в одну директорию вместе с файлом "server.js", т.е. в корень репозитория. Выходные файлы расположены в директории, которая указана в консоли.

Чтобы запустить сервер в кофиге указывает номер порта и хост, если хост `null`, то используется имя ПК или ip
```
npm run start
```