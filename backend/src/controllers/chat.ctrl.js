const { chatService } = require("../services");

module.exports = {
  async createChatRoom(req, res, next) {
    const userId = req.userId;
    const { title, max } = req.body;

    try {
      const createdRoom = await chatService.addChatRoom(title, userId, max);

      res.status(201).json({
        success: true,
        status: 201,
        message: "success creating new Chat Room",
        datas: createdRoom,
      });
    } catch (err) {
      next(err);
    }
  },

  async createChatLog(req, res, next) {
    const userId = req.userId;
    const { roomId, chat } = req.body;

    try {
      const createdChat = await chatService.addChatLog(roomId, userId, chat);
      const userChatInfo = await chatService.getUserChatLog(createdChat._id);
      console.log(userChatInfo);

      req.app.get("chatIO").of("/chat").to(roomId).emit("chat", userChatInfo);

      res.status(201).json({
        success: true,
        status: 201,
        message: "success creating new chat log",
        datas: userChatInfo,
      });
    } catch (err) {
      next(err);
    }
  },

  async showChatLog(req, res, next) {
    const { roomId } = req.params;

    try {
      const chatLog = await chatService.getChatLog(roomId);

      res.status(200).json({
        success: true,
        status: 200,
        message: "success loading chat logs",
        datas: chatLog,
      });
    } catch (err) {
      next(err);
    }
  },
};
