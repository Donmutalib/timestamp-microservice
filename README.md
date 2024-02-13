# node-timestamps
node-timestamps is a Timestamp Microservice built with Nodejs and Express

## ⚙️ Installation

- Open CMD
  
- Change directory to desktop

  `cd desktop`
   
- Clone this repository

  `git clone git@github.com:backendkolawole/node-timestamps.git`

- Change the current directory

  `cd node-timestamps`
  
- Install packages
  
  `npm install`

- Create a .env file in the root directory
  - Set up the `PORT` variable

> [!IMPORTANT]
> To avoid port collisions, in the source code, the port value is `3000`

- Run the server

  `npm start`


## Endpoints

A date string is valid if it can be parsed by new Date(date_string).

A request to `[base_url]/api/timestamp/:date?` should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)

An empty date parameter should return the current time in a JSON object with a Unix key

## Example

Example Input

**GET [project_url]/api/timestamp/2015-12-25**

![Postman screenshot of GET request to [base_url]/api/timestamp.](https://github.com/backendkolawole/node-timestamps/assets/102606432/c86a93c5-71c5-4fff-a0c6-e6736b0e1a3d)


Example Output

```
200 (OK)
{
  "unix":1585699200000,
  "utc": "Wed, 01 Apr 2020 00:00:00 GMT"
}
```

Example Input

**GET [base_url]/api/timestamp/**

![Postman screenshot of GET request to [base_url]/api/timestamp.](https://github.com/backendkolawole/node-timestamps/assets/102606432/43de5b87-8223-4c07-bf34-a261aa740cb4)

Example Output

```
200 (OK)
{
    "unix": 1707822401354,
    "utc": "Tue, 13 Feb 2024 11:06:41 GMT"
}

```

If the input date string is invalid, the API returns an object having the structure 

```
400 (Bad Request)

{
  error: "Invalid Date"
}
```
