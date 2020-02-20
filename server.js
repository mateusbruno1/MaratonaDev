//configurando o servidor
const express = require("express");
const server = express();

//configurar o servidor para apresentar arquivos extras
server.use(express.static('public'));

//configurando a template engine
const nunjucks = require("nunjucks");
nunjucks.configure("./",{
  express:server
});
//configurar a apresentação da pagina

server.get("/",function(req,res){
  return res.render("index.html")
});



//ligar o servidor e permitir o acesso na porta 8080
server.listen(8080,function(){
  console.log("iniciei o servidor")
}); // escolhendo a porta do servidor
