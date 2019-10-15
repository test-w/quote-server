# Random Quote Server

This server will serve a random attributed quote.

The quotes are provided via a request to `/quotes` which will serve a random quote in the following format:
```
{
  text: "QUOTE TEXT",
  author: "QUOTE AUTHOR"
}
```
By default, this container serves on port `3001`. However, this can be configured via the `PORT` environmental variable.

## Running Locally
The server can be run locally with the following command in the root of the repository.
```
node index.js
```
The server will serve requests on the following URL:
```
http://localhost:3001/quotes
```

## Building & Running the Docker Image
To build the docker image, use the following command in the root of the repository:
```
docker build -t quote-server .
```
To run the container and serve from port 80, use the following command:
```
docker run -p80:3001 --name quote-server quote-server
```
The container can be stopped with the following command:
```
docker stop quote-server
```
