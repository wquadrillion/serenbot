import ResponsesDAO from '../daos/responsesDAO';

export default class UsersController {
  static async getUserByUsername(req, res, next) {
    try {
      const result = await ResponsesDAO.getUserResponses(req.params.username);

      if (!result) {
        return res.status(404).json({ message: 'User responses not found.' });
      }

      return res.status(200).json({
        data: { ...result },
      });
    } catch (error) {
      next(error);
    }
  }
}
