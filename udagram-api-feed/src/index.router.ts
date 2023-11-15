import {Router, Request, Response} from 'express';
import {FeedRouter} from './src/routes/feed.router';
import {UserRouter} from '../udagram-api-user/src/routes/user.router';

const router: Router = Router();

router.use('/feed', FeedRouter);
router.use('/users', UserRouter);

router.get('/', async (req: Request, res: Response) => {
  res.send(`V0`);
});

export const IndexRouter: Router = router;
