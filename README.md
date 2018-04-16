# Laravel Mix example 

using laravel mix as stand-alone (outside laravel app)

see https://github.com/JeffreyWay/laravel-mix/blob/master/docs/installation.md


## Features

* Simple ReactJS app, with multiple components
* Demo of simple navigation, using react-router (3 static pages as component)
* Using Semantic UI for styling (https://react.semantic-ui.com)


## Requirements

* NodeJS v9.3.0 or higher

## Installation

clone the repository

```
git clone git@github.com:buonzz/laravel-mix-example.git
```

fetch the dependencies

```
npm install
```

pre-process the js/css

```
npm run production
```

now the processed files is on *dist* folder. In order to serve this static files, you can install the local-web-server globally

```
sudo npm install -g local-web-server
```

once installed, serve the files

```
ws --spa index.html -d dist
```

now visit http://localhost:8000/ in your browser


## 404 when deeplinking

if you visit directly the /page1 or page2 without having to go through the root path first "/", you might be getting a 404. This will require a url-rewriting so that non asset requests will go through index.html first.

in nginx, this can be easily done through this configuration:

```
server {
        server_name yourapp.com;
        root /home/you/yourapp.com;
        access_log /var/log/nginx/yourapp.com.access.log;
        index index.html index.htm;

        try_files $uri /index.html;

        # serve static files directly
        location ~* \.(jpg|jpeg|gif|css|png|js|ico|html|phar)$ {
                add_header 'Access-Control-Allow-Origin' '*';
        }

}
```