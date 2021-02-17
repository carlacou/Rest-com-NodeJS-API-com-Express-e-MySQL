// arquivo responsável por subir o servidor no ar

const customExpress = require('./config/customExpress')

const app = customExpress()

app.listen(3000, () => console.log('servidor rodando na porta 3000'))

