class ProductTypeService {
  constructor(knex) {
    this.knex = knex;
  }

  list(id) {
    let query = this.knex
      .select("name", "price", "img")
      .from("clothes")
      .where({
        horoscope_id: 0,
        type_id: id
      });
    // console.log(query);
    return query.then(data => {
      // console.log(data);
      return data;
    });
  }
}

module.exports = ProductTypeService;
