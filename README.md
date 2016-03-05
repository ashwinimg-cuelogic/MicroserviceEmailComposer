# MicroserviceEmailComposer

```sh
 * Introduction
 * Version
 * Tech
 * Installation
 * Requirements
 * Configuration
 * Installation
 ```


 INTRODUCTION
------------

This is the lambda function triggered on the update/insert in the EmailComposer table.
which will give the call to the amazon AWS API to fill in EmailSender table in DynamoDB.


Version
------------

1.0.0

### Tech

This Microservice uses following:

* [AWS-Lambda]
* [Node js]  - evented I/O for the backend
* [Grunt] - the streaming build system for deoploying and testing lambda functions


REQUIREMENTS
------------

This project requires following tools (need to install globally):

 * node - 4.* 
 * aws-cli
 * grunt 


Configuration 
------------

add .env file at the root of the directory with the following values

>API_URL = "VALUE OF THE API URL"

>MICROSERVICE_EMAIL_COMPOSER_ARN = "ARN_OF_THE_LAMBDA_FUNCTION"


INSTALLATION
------------

To setup this project, run the command below in your repository:

```sh
composer install
```

