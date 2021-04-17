import User from "../models/user.js";

export const addUser = async (req, res, next) => {
  console.log(req.body);
  try {
    const user = await User.create(req.body);
    return res.status(200).send({
      sucess: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
    res.status(501).json({
      error: "Server error",
    });
  }
};

export const getUser = (req, res) => {
  const user = User.findOne({ username: "harish" }, (err, res) => {
    if (err) console.error(err);
    else {
      res.send({
        data: res,
        status: "success",
      });
    }
  });
};
