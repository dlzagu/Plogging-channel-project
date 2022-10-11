const { authService, userService } = require("../services");

module.exports = {
  async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const user = await authService.checkUser(email, password);

      await userService.findLockedUser(email);

      const token = await authService.generateAccessToken(user.userId);

      const userData = {
        token,
        ...user,
      };

      res.status(201).json({
        success: true,
        status: 201,
        message: "login success",
        datas: userData,
      });
    } catch (err) {
      next(err);
    }
  },

  async register(req, res, next) {
    const { email, password, nickname } = req.body;
    try {
      const user = await authService.createUser(email, password, nickname);

      res.status(201).json({
        success: true,
        status: 201,
        message: "register success",
        datas: user,
      });
    } catch (err) {
      next(err);
    }
  },

  async withdrawUser(req, res, next) {
    const userId = req.userId;

    try {
      await authService.lockUserInfo(userId);

      res.status(201).json({
        success: true,
        status: 201,
        message: "success locking user info",
      });
    } catch (err) {
      next(err);
    }
  },
};
