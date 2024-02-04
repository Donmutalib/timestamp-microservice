# node-timestamps

## Motivation
It can be used with any shopping project needing JSON products. This project incorporates filtering capabilities using django-filter. Django-filter is a generic, reusable application to alleviate writing some of the more mundane bits of view code.

### Goal
The goal with drf-ecommerce-api is to provide a client user with e-commerce JSON data and allow users to filter based on a model’s fields, displaying the form to let them do this.

⚙️ Installation

# Setup
Clone the repo by running git clone git@github.com:backendkolawole/timestamp-microservice.git in terminal

Create a .env file and set up the PORT variable

run npm install

run npm start


## Other usage examples

Documentation
A date string is valid if it can be parsed by new Date(date_string).

A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)

If the input date string is invalid, the API returns an object having the structure { error: "Invalid Date" }

An empty date parameter should return the current time in a JSON object with a unix key

# Example

Example Input
/api/timestamp/2015-12-25

Example Output
{"unix":1585699200000, "utc": "Wed, 01 Apr 2020 00:00:00 GMT"}

Example Input
/api/timestamp/

Example Output
{"unix":1585751851261, "utc": "Wed, 01 Apr 2020 14:37:31 GMT"}

## Closing and resources 
## Contact
## Contributing




