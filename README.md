# Pdf Generator

A simple PDF Generator using Node.js

## REQUIREMENTS

In order to build the project, you need to install:

- Node JS
- Npm

## SETUP

To install all the dependencies, you can run:

```
$ npm install
```

Copy the env file to create your own:

```
$ cp .env.example .env
```

After that, you can create an account on [https://cloudinary.com/](https://cloudinary.com/). Go to your settings page and get your name, your api key and your api secret. Replace them in your .env file

## RUN

Run the project using:

```
$ npm run dev (For auto reload)
$ npm start (For prod)
```

The server will run on [http://localhost:3000](http://localhost:3000)

## HOW IT WORKS

Before you tested the project, you have to create a folder called `documents` in the root directory.
You have to send in the body request the `filename` and the `content` to the `/document` route. It will automatically generate a pdf file with the filename in the `documents` folder. It will also upload the file to the cloudinary account that you created.
