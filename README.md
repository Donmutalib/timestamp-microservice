# Timestamp Microservice
# Documentation
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



