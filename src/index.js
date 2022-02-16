import dotenv from 'dotenv';
import log from 'fancy-log';
import { MongoClient } from 'mongodb';

import { logger } from './helpers';
import ResponsesDAO from './daos/responsesDAO';
import { apiSever, slackApp } from './servers';

dotenv.config();

const port = process.env.PORT || 5000;
const botPort = process.env.SLACK_BOT_PORT || 3000;

MongoClient.connect(process.env.MONGOBD_URL, { useNewUrlParser: true })
  .catch(err => {
    logger.error(err.stack);
    process.exit(1);
  })
  .then(async client => {
    log('📅 Database connection successfull!!!!');

    // Add collections
    await ResponsesDAO.injectDB(client);

    apiSever.listen(port, async () => {
      log(`🚀 Express app is running on port ${port}`);

      await slackApp.start(botPort);
      log(`⚡️ Slack Bolt app is running on port ${botPort}`);
    });
  });
