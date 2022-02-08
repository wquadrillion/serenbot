const { App } = require('@slack/bolt');
const dotenv =  require('dotenv');



dotenv.config();

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

/* Add functionality here */
app.command('/bot', async ({ command, ack, say }) => {
  // Acknowledge command request
  await ack();
  await say(`Welcome. How are you doing?`);
});
app.error((error) => {
  console.error(error);
});


(async () => {
  // Start the app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();