# Timestamp Microservice
# Documentation
A date string is valid if it can be parsed by new Date(date_string).

A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)

If the input date string is invalid, the API returns an object having the structure { error: "Invalid Date" }

An empty date parameter should return the current time in a JSON object with a unix key



