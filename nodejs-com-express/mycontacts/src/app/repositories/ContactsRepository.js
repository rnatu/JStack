const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Renato',
    mail: 'Renato@mail.com',
    phone: '123123213',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
