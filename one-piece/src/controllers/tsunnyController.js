const tsunnyModels = require("../models/tsunnyModels");
const bcrypt = require("bcrypt");
const SALT = 10;

const all = async (req, res) => {
  try {
    const allPirates = await tsunnyModels.find();
    res.status(200).json({
      statusCode: 200,
      message: "Pirates super loaded",
      pirates: allPirates,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.message,
    });
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const findPirate = await tsunnyModels.findById(id);

    if (!findPirate)
      return res.status(404).json({
        statusCode: 404,
        message: `Pirate's  ${id} not found`,
      });
    res.status(200).json(findPirate);
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.message,
    });
  }
};

const create = async (req, res) => {
  const { email, password, preferenceName } = req.body;

  if (!email) {
    return res.status(400).json({
      statusCode: 400,
      message: `mandatory field`,
    });
  }

  if (!password) {
    res.status(400).json({
      statusCode: 400,
      message: `mandatory field`,
    });
  }

  try {
    const newPirate = new tsunnyModels({ email, password, preferenceName });

    newPirate.password = bcrypt.hashSync(password, SALT);

    const savedPirate = await newPirate.save();

    return res.status(201).json({
      statusCode: 201,
      message: `New Pirate on board`,
      pirate: savedPirate,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.message,
    });
  }
};

const update = async (req, res) => {
  const { email, password, preferenceName } = req.body;
  const id = req.params.id;
  try {
    const findPirate = await tsunnyModels.findById(id);

    if (!findPirate)
      return res.status(404).json({
        statusCode: 404,
        message: `Pirate's ${id} not found`,
      });

    findPirate.password =
      (password && bcrypt.hashSync(password, SALT)) || findPirate.password;
    findPirate.email = email || findPirate.email;
    findPirate.preferenceName = preferenceName || findPirate.preferenceName;

    const updatedPirate = await findPirate.save();

    return res.status(200).json({
      statusCode: 200,
      message: `Pirate updated`,
      pirate: updatedPirate,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.message,
    });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;

  try {
    const findPirate = await tsunnyModels.findById(id);

    if (!findPirate)
      return res.status(404).json({
        statusCode: 404,
        message: `Pirate's ${id} not found`,
      });

    await findPirate.delete();

    return res.status(200).json({
      statusCode: 200,
      message: `Pirate removed :(`,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.message,
    });
  }
};

const updateById = async (req, res) => {
  const { id } = req.params.id;
  const pirates = await tsunnyModels.findById(id);
  const pirate = pirates.find((pirates) => pirate.id == id);

  if (!pirate) {
    return response.status(404).send({
      message: `Pirate's ${id} not found!`,
    });
  }

  const { email, password, preferenceName } = req.body;

  if (typeof preferenceName != "string" || preferenceName.trim() == "")
    return response.status(400).send({
      message: "This is a mandatory field",
    });

  if (typeof email != "string" || email.trim() == "")
    return response.status(400).send({
      message: "This is a mandatory field",
    });

  if (typeof password != "number" || password < 0) {
    return response.status(400).send("The password must be a number");
  }

  if (preferenceName) pirate.preferenceName = preferenceName;
  if (email) pirate.email = email;
  if (password) pirate.password = pirate;

  response.status(200).send(pirate);
};
module.exports = { all, findOne, create, update, remove, updateById };
