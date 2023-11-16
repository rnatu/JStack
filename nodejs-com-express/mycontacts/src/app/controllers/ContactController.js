class ContactController {
  index(request, response) {
    // Listar todos os registros
    response.send('send from ContactController');
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar um novo registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

module.exports = new ContactController();
