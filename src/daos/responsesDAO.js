import { logger } from '../helpers';


export default class ResponsesDAO {
  static responses;

  static async injectDB(conn) {
    if (ResponsesDAO.responses) {
      return;
    }

    try {
      ResponsesDAO.responses = await conn
        .db(process.env.SLACK_BOT_DB)
        .collection('responses');
    } catch (e) {
      logger.error(`Unable to establish collection handles in ResponsesDAO: ${e}`);
    }
  }

  static async addFeeling(payload) {
    try {
      await ResponsesDAO.responses.updateOne(
        { username: payload.username },
        { $set: payload },
        { upsert: true },
      );
      return { success: true };
    } catch (e) {
      logger.error(`Unable to save response: ${e}`);
      return { error: true };
    }
  }

  static async addHobbies(payload) {
    try {
      await ResponsesDAO.responses.updateOne(
        { username: payload.username },
        { $set: { ...payload } },
        { upsert: true },
      );
      return { success: true };
    } catch (e) {
      logger.error(`Unable to save response: ${e}`);
      return { error: true };
    }
  }



  static async getUserResponses(username) {
    try {
      const result = await ResponsesDAO.responses.findOne(
        { username },
        { projection: { _id: 0 } },
      );
      return result;
    } catch (e) {
      logger.error(`Something went wrong: ${e}`);
      throw e;
    }
  }
}
