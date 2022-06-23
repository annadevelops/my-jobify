//@desc   Register user
//@route    POST /api/v1/auth/register
//@access   Public
const register = (req, res) => {
  res.send("register user");
};

//@desc   Login user
//@route    POST /api/v1/auth/login
//@access   Public
const login = (req, res) => {
  res.send("login user");
};

//@desc   Update user
//@route    PATCH /api/v1/auth/update
//@access   Private
const updateUser = (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
