# Laravel Mix example 

using laravel mix as stand-alone (outside laravel app)

see https://github.com/JeffreyWay/laravel-mix/blob/master/docs/installation.md


## Features

* Simple ReactJS app, with multiple components
* Demo of simple navigation, using react-router (3 static pages as component)
* combine normalize css + app specific CSS


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

now the processed files is on *dist* folder. In order to serve this static files, you can install the http-server globally

```
npm install http-server -g
```

once installed, serve the files

```
http-server dist
```

now visit http://localhost:8080/ in your browser