const fs = require('fs')
const filePath = './views/home.html'
const baseHandler = require('./baseHandler')



module.exports = (req, res) => {
  if (req.pathname === '/' && req.method === 'GET') {
    fs.readFile(filePath, (err, data) => {
        if(err){
            console.log(err)
            return
        }
        res.writeHead(200,{
            'Content-Type':'text/html'
        })
        baseHandler.responseOk(res, 'text/html', data)
    })
  } else{
      return true
  }
}
