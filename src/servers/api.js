import cors from 'cors';
import morgan from 'morgan';
import log from 'fancy-log';
import express from 'express';
import winston from 'winston';
import expressWinston from 'express-winston';

import apiRoutes from '../routes';

const apiSever = express();
const isProd = process.env.NODE_ENV === 'prod';

apiSever.use(cors());
!isProd && apiSever.use(morgan('dev'));
apiSever.use(express.json());
apiSever.use(express.urlencoded({ extended: true }));
apiSever.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    meta: false,
    expressFormat: true,
    colorize: true,
    format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
  }),
);

apiSever.get('/', (_req, res) => {
  res.send(
    `<div  style="text-align: center">
      <h1>Welcome to Slack Bot</h1>
      <h4>Thanks  &#x1F600;</h4>
    </div>
    `,
  );
});

apiSever.use('/api', apiRoutes);

// catch 404 and forward to error handler
apiSever.use('*', (_req, _res, next) => {
  const error = new Error('Resource does not exist');
  error.status = 404;
  next(error);
});

if (!isProd) {
  apiSever.use((error, _req, res, _next) => {
    log.error(error.stack);

    res.status(error.status || 500).json({
      error: {
        message: error.message,
      },
    });
  });
}

export default apiSever;
