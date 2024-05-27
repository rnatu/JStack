const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();

    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    const category = await CategoriesRepository.findById(id);

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoriesRepository.delete(id);
    // 204: No content
    response.sendStatus(204);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.create({ name });

    response.json(category);
  }

  async update(request, response) {
    const { id } = request.params;

    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const categoryExists = await CategoriesRepository.findById(id);
    if (!categoryExists) {
      return response.status(404).json({ error: 'Category not found' });
    }

    const nameIsAlreadyInUse = await CategoriesRepository.findByName(name);
    if (nameIsAlreadyInUse) {
      return response.status(404).json({ error: 'Name is already in use' });
    }

    const category = await CategoriesRepository.update(id, { name });

    response.json(category);
  }
}

module.exports = new CategoryController();
