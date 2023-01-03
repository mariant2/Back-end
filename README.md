## Introduction
Practice Backend with Node, create a second-hand item sales service calling Nodepop. The service maintains advertisements for the purchase or sale of articles and allows consultation and filtering by various criteria.


### Install mongoDB
brew tap mongodb/brew
brew update
brew install mongodb-community@6.0


### Start mongoDB
brew services start mongodb/brew/mongodb-community


### Create Express project
npm init
npm install express mongoose

### Start the server
node app.js


### Design de datamodel

```shell
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['find', 'sell']
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    tags: [{
        type: String,
        required: true,
        enum: ['work', 'lifestyle', 'motor', 'mobile']
    }]
});
```

### Definition
Add a new product

> http://localhost:3000/products

<img width="712" alt="image" src="https://user-images.githubusercontent.com/104854007/210420138-ea87db45-dd78-42a8-a108-e4149443c2d4.png">


Search for a product, including the tag and in order "desc"
http://localhost:3000/products?tags=motor,mobile&sort=name&order=desc

<img width="1012" alt="image" src="https://user-images.githubusercontent.com/104854007/210420438-fefbe7e1-3f18-4ce0-b147-177231bd6bd3.png">


List of tags available
http://localhost:3000/tags

<img width="718" alt="image" src="https://user-images.githubusercontent.com/104854007/210420618-7ba285ce-dd35-42b7-b502-58e033e852d2.png">
