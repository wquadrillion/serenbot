import { Router } from 'express';
import { UsersController } from '../controllers';

const router = new Router();

router.get('/users/:username/answers', UsersController.getUserByUsername);

export default router;
