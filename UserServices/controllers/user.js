import { db } from "../index.js";

export const addUser = async (req, res) => {
  console.log(req.body);
  try {
    const user = await db.collection("users").insertOne(req.body);
    return res.status(200).send({
      sucess: true,
      data: user.ops,
    });
  } catch (err) {
    console.log(err);
    res.status(501).json({
      error: "Server error",
    });
  }
};

export const getUser = (req, res) => {
  const { username } = req.params;
  const user = db.collection("users").findOne({ username }, (err, results) => {
    if (err) console.error(err);
    else {
      res.send({
        data: results,
        status: "success",
      });
    }
  });
};
