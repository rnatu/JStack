const db = require('../../database/index');

class CategoriesRepository {
  async findAll() {
    const rows = await db.query('SELECT categories.* FROM categories ORDER BY name');

    return rows;
  }

  async findById(id) {
    const [row] = await db.query(
      `
      SELECT categories.*
      FROM categories
      WHERE categories.id = $1
      `,
      [id],
    );
    return row;
  }

  async findByName(name) {
    const [row] = await db.query(
      `
      SELECT categories.*
      FROM categories
      WHERE categories.name = $1
      `,
      [name],
    );

    return row;
  }

  async create({ name }) {
    const [row] = await db.query(
      `
        INSERT INTO categories(name)
        VALUES ($1)
        RETURNING *
      `,
      [name],
    );

    return row;
  }

  async update(id, { name }) {
    const [row] = await db.query(
      `
        UPDATE contacts
        SET name = $1, email = $2, phone = $3, category_id = $4
        WHERE id = $5
        RETURNING name, email, phone
      `,
      [name, id],
    );

    return row;
  }
}

module.exports = new CategoriesRepository();
