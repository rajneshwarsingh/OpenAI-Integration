import express from 'express';
import openAICtrl from '../controllers/openAI';
import validationMiddleware from '../validators/joi.validator';
const router = express.Router();

router.get('/', (req, res, next) => validationMiddleware(req, res, next, 'create'), openAICtrl.generateText);

export default router;
