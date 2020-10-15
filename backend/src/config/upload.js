const multer = require('multer')
const path = require('path')

module.exports = {
    storage: multer.diskStorage({ // forma de como o multer irá salvar as imagens
        destination: path.resolve(__dirname, '..', '..', 'uploads'), //informando a pasta onde será salva a imagem
        filename: (req, file, cb) => { // É uma função, que recebe três parâmetros, 
            const ext = path.extname(file.originalname)
            const name = path.basename(file.originalname, ext)


            cb(null, `${name}-${Date.now()}${path.extname(ext)}`)
        }
    })
}