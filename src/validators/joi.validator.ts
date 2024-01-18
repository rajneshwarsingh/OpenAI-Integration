/*
 * @file: validators/joi.validator.js
 * @description: It contain validation function on request body, params and query.
 * @author: Rajneshwar Singh
 */

import joi from 'joi';
import { message, statusCode } from '../uitilities/constants';
import { failAction } from '../uitilities/response';

const create = joi.object({
  prompt: joi.string().max(300).required(),
});

const validationMiddleware = async (req: any, res: any, next: any, schema: string) => {
  const option = {
    abortEarly: false,
    allowUnknown: false,
  };

  if (schema == 'create') {
    var { error } = create.validate(req.body, option);
  }

  if (error) {
    res.status(statusCode.badRequest).json(failAction(statusCode.badRequest, error.details[0].message, message.validationError));
  } else {
    next();
  }
};

export default validationMiddleware;
