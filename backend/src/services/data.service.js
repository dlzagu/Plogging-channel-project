const ApiError = require("../utils/ApiError");

module.exports = {
  async readData(dataName) {
    try {
      const jsonData= require(`../../public/data/${dataName}.json`); 
      return jsonData;
    } catch (error) {
      throw ApiError.badRequest("해당 데이터는 존재하지 않습니다.");
    }
  },
};