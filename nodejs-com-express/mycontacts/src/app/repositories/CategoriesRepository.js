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
        UPDATE categories
        SET name = $1
        WHERE id = $2
        RETURNING name
      `,
      [name, id],
    );

    return row;
  }
}

module.exports = new CategoriesRepository();
