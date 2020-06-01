import express from 'express';

const server = express();

server.get('/users', (request, response) => {
  console.log('deu');

  response.json(['teste', 'teste1', 'teste2'])
});

server.listen(3333);