# About this folder

This folder contains the only model for this microservice: products.

## Product model

Each product has:
- name: A name that describe a product
- photo: A photo that show the product. If not specified, use a default image
- category: The category of the product. Can be 'food', 'drink' or 'other'
- price: A price, in USD dollar, for the product

## Utils folder

Utils folder contains all the utils functions that can be useful for the model. An example, is the function that checks if a given ID is valid or not. Using an utility function help to decouple the way that the controller checks if an id is valid or not.
In this way, if you have multiple controllers, and you need to change to way you check if an id is valid or not, you can do it in just one place