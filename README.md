## kickoff-koa-docker

The purpose of this package is to provide a basic, test-ready KOA project within seconds. For those that want to expermiment wiht Docker and / or AWS Elastic Beanstalk I've added the needed configuration and Docker file to run this as a Docker image

The Docker image creates an nginx server that forwards request to the node app

[![Build Status](https://travis-ci.org/BobbyKostadinov/kickoff-koa-docker.svg)](https://travis-ci.org/BobbyKostadinov/kickoff-koa-docker)

## Install

After cloning the repository run

    npm install

To start the koa server

    npm start

To run tests

    npm test

or to run tests alone withouth coverage:

    gulp test --harmony


For more information on how to Run Docker: https://github.com/BobbyKostadinov/docker-nginx-node/blob/master/README.md

## Bundle

- Koa.js

The KOA framework. This can be used for both APIs and web sites.

- bunyan

JSON logger, that supports KOA and allows requst logging though exposing request ID so entries can be tracked

- gulp

Task manager for applications

- load-common-gulp-tasks

Package that pre-loads some useful gulp tasks such as test, test-cover, watch and more

## Folder structure

 - /system
This folder contains all the files needed to configure and run Docker image.
 - /lib
The default location of all services and resources. The only resource supplid with the sceleton application is _health that can be used for ping monitors
 - /lib/**/test
Location for all Mocha tests
  - /gulp
Holds gulp tasks useful for a web server

## Managing the server

After you clone the basic package from this repository, you can start adding your own resources and services. Use gulp to maintain your tags and your versions

    gulp patch|feature|release
    
The above will bump up your tag and add a commit message for package.json

Edit the README so it fits your application

## License

[MIT](https://github.com/BobbyKostadinov/kickoff-koa-docker/blob/master/LICENSE)
