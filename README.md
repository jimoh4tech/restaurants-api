# Restaurants Finder API Documentation
## Introduction
The Restaurants Finder API allows users to find restaurants within a city based on their location and desired distance. This documentation provides detailed information on how to use the API, including example requests and responses, parameters, and error codes.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```




## Base URL
`http://localhost:3000/v1/restaurants`

## Rate Limiting
The API is rate-limited to prevent abuse:

- Limit: 10 requests per minute
- TTL: 60 seconds

## Endpoints
1. Find Restaurants
HTTP Method: GET
Path: /v1/restaurants

Parameters:
```bash
- city: (Required) The name of the city where the user wants to find restaurants.
- latitude: (Required) The user current location latitude.
- longitude: (Required) The user current location longitude.
- distance: (Required) The maximum distance in meters from the user location to the restaurant.
```
Example Request:

```bash
GET /v1/restaurants?city=New%20York&latitude=40.7128&longitude=-74.0060&distance=1000
```
Example Response:

```json
{
  "restaurants": [
    {
      "name": "Cafe Delight",
      "address": "123 Main St, New York, NY",
      "latitude": 40.7112,
      "longitude": -74.0055
    },
    {
      "name": "Pasta Paradise",
      "address": "456 Elm St, New York, NY",
      "latitude": 40.7145,
      "longitude": -74.0082
    }
  ]
}
```
Error Codes:
```
400 Bad Request: Invalid parameters or missing required parameters.
404 Not Found: City not supported or no restaurants found.
```
2. Get a Single Restaurant
HTTP Method: GET
```bash Path: /v1/restaurants/{restaurantId}```

Example Request:

http
```bash
GET /v1/restaurants/1
```
Example Response:

```json
{
  "name": "Cafe Delight",
  "address": "123 Main St, New York, NY",
  "latitude": 40.7112,
  "longitude": -74.0055
}
```

Error Codes:

```404 Not Found: Restaurant not found.```

3. Add a New Restaurant
HTTP Method: POST
```Path: /v1/restaurants```

Example Request:

```http
POST /v1/restaurants

Content-Type: application/json
```
```json
{
  "name": "New Restaurant",
  "address": "789 Elm St, New York, NY",
  "latitude": 40.7160,
  "longitude": -74.0100
}
```
Example Response:

```json
{
  "name": "New Restaurant",
  "address": "789 Elm St, New York, NY",
  "latitude": 40.7160,
  "longitude": -74.0100
}
```
Error Codes:

```400 Bad Request: Invalid request body.```

4. Update an Existing Restaurant
HTTP Method: PUT
```Path: /v1/restaurants/{restaurantId}```

Example Request:

```http
PUT /v1/restaurants/1
Content-Type: application/json

{
  "name": "Updated Restaurant",
  "address": "123 Main St, New York, NY",
  "latitude": 40.7112,
  "longitude": -74.0055
}
```
Example Response:

```json

{
  "name": "Updated Restaurant",
  "address": "123 Main St, New York, NY",
  "latitude": 40.7112,
  "longitude": -74.0055
}
```
Error Codes:

```400 Bad Request: Invalid request body or missing required parameters.
404 Not Found: Restaurant not found.
```
5. Delete an Existing Restaurant
```http
HTTP Method: DELETE
Path: /v1/restaurants/{restaurantId}
```
Example Request:

```http
DELETE /v1/restaurants/1
```
Example Response:

```json
{
  "response": "restaurant deleted"
}
```
Error Codes:

```404 Not Found: Restaurant not found.```

## Conclusion
This documentation provides a comprehensive guide on how to use the Restaurants Finder API. Ensure to follow the specified parameters and guidelines to make successful API requests and handle possible error scenarios effectively.





