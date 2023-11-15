import {Router, Request, Response} from 'express';
import {FeedRouter} from './routes/feed.router';
../../udagram-api-user/src/routes/user.router
const router: Router = Router();

router.use('/feed', FeedRouter);

router.get('/', async (req: Request, res: Response) => {
  res.send(`V0`);
});

export const IndexRouter: Router = router;
