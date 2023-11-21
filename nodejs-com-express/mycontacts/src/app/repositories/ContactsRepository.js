const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Renato',
    mail: 'Renato@mail.com',
    phone: '123123213',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Jose',
    mail: 'jose@mail.com',
    phone: '12312asdad12azasd3213',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }
}

module.exports = new ContactsRepository();
