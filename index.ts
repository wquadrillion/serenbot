import { App, ExpressReceiver, LogLevel } from '@slack/bolt';
import dotenv from 'dotenv';

const PORT = 3000;

dotenv.config();

const token = process.env.SLACK_BOT_TOKEN;
const secret = process.env.SLACK_SIGNING_SECRET || '';

const receiver = new ExpressReceiver({
  signingSecret: secret,
});


/**
 * Initialise Bolt App
 */
const app = new App({
  token,
  receiver,
  logLevel: LogLevel.DEBUG,
});


// Initialises app in development
//if (process.env.NODE_ENV === 'development')
  (async () => {
    await app.start(PORT);
    console.log(`Started slack bot 🚀 - PORT: ${PORT}`);
  })();