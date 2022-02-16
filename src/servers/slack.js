import dotenv from 'dotenv';
import { App } from '@slack/bolt';

import ResponsesDAO from '../daos/responsesDAO';
import { welcomeBlock, hobbiesBlock } from '../constants';

dotenv.config();

const slackApp = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true, // enable the following to use socket mode
  appToken: process.env.APP_TOKEN,
});

slackApp.command('/bot', async ({ ack, say }) => {
  await ack();
  await say({ text: 'welocome user', blocks: welcomeBlock });
});

slackApp.action('welcome_action', async ({ ack, say, body }) => {
  await ack();

  const payload = {
    user_id: body.user.id,
    name: body.user.name,
    username: body.user.username,
    feeling: body.actions[0]['selected_option']['value'],
  };

  await ResponsesDAO.addFeeling(payload);

  await say({ text: 'Ask about hobbies', blocks: hobbiesBlock });
});

slackApp.action('hobbies_action', async ({ ack, say, body }) => {
  await ack();

  const payload = {
    username: body.user.username,
    hobbies: body.actions[0]['selected_options'].map(option => option.value),
  };

  await ResponsesDAO.addHobbies(payload);

  await say('Thank you 🙏.');
});

export default slackApp;
