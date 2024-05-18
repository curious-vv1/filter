const router = require("express").Router();
const Filter = require("../models/filter");

router.route("/add").post(async (req, res) => {
  try {
    const name = req.body.name;
    const company = req.body.company;

    const newData = new Filter({ name, company });
    const saveData = await newData.save();

    res.status(201).json(saveData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.route("/get").get(async (req, res) => {
  try {
    const data = await Filter.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = router;
