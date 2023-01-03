## Introduction
Practice Backend with Node, create a second-hand item sales service calling Nodepop. The service maintains advertisements for the purchase or sale of articles and allows consultation and filtering by various criteria.




//instalou uma livraria chance ...npm install chance..random de palavras aleatorias 
//npm i nodemon
//npx nodemon index.js
//npm init -y

### MongoDB
Start a local MongoDB server by typing the following line in a terminal:

```shell
> ./bin/mongod --dbpath ./data/db --directoryperdb
```

### Installation of dependencies
Start the server is to install all project dependencies. To do this, in a terminal we execute the following:

```shell
> npm install
```

### Initialize Database
In this process, a collection of documents from the database necessary for the operation of the 'nodepop' application will be created and loaded, for this we execute the `installDB` script inside the package.json:
```shell
>npm run installDB
```

### Launch App
To start:
- In DEBUG mode for development, we execute in a terminal:
```shell
> npm run dev
```
- In Production mode, we execute:
```shell
> npm run prod
```

> You can learn more by reviewing the `scripts` section in the configuration file *package.json*

## Authentication
No authentication yet.

## Error Codes
What error and status codes can a user expect?

The API returns a json, which has a `success` boolean property, which will be `true` when the response has been successfully resolved, but in case of error the `success` field will be `false` and a `error` field with the error message.

```json
{
  "success": false,
  "error": "Error message"
}
```

## Limit Requests
Being currently in development there is no limit on the number of requests.



# API Methods (NodePop)

## Resources
Resources are all the methods, and filters applied or available to an endpoint in this case the `/ads` endpoint:
- `/ads/` - get all nodepop ads.
- `/ads/:id` - get a specific ad.
- `/ads/tags` - get a list of existing tags.

## Endpoint `/ads`

The **/ads** endpoint in our API allows us to query, paginate, and filter data for all ads registered in the MongoDB database of our `Nodepop` application.

## [GET] Announcement List

### Definition
*[GET]* [http://localhost:3000/apiv1/ads](http://localhost:3000/apiv1/ads)

**GET** /apiv1/ads

// NOTAS

# Install mongoDB
brew tap mongodb/brew
brew update
brew install mongodb-community@6.0

# Start mongoDB
brew services start mongodb/brew/mongodb-community

# Create Express project
npm init
npm install express mongoose