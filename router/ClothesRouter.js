const express = require("express");
class ClothesRouter {
  constructor(clothesService) {
    this.clothesService = clothesService;
  }
  router() {
    let router = express.Router();
    router.get("/", this.get.bind(this));
    return router;
  }

  get(req, res) {
    console.log("I am routing");
    console.log(req.body.horoscope);
    return this.clothesService
      .list()
      .then(clothes => res.json(clothes))
      .catch(err => res.status(500).json(err));
  }
}

module.exports = ClothesRouter;
