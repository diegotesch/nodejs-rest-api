const express = require('express')

const app = express()

app.get('/hello', (req, res) => {
  res.json({
    message: 'Hello World'
  })
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})