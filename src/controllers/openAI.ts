import { Request, Response } from 'express';
import logger from '../uitilities/logger';
import { OpenAIServices } from '../services/openAI';
import { message, statusCode } from '../uitilities/constants';
import { successAction, failAction } from '../uitilities/response';

class openAIController {
  public static async generateText(req: Request, res: Response) {
    try {
      const data = await OpenAIServices.generateText(req.query.prompt);
      res.status(statusCode.success).json(successAction(statusCode.success, data, message.fetch('Generated text')));
    } catch (err: any) {
      logger.error(message.errorLog('userList', 'userController', err));
      res.status(statusCode.badRequest).json(failAction(statusCode.badRequest, err.message, message.somethingWrong));
    }
  }
}

export default openAIController;
