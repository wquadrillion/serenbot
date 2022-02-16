# slack-bot


## Technologies

- [Node.js](https://github.com/nodejs/node)
- [Express.js](https://github.com/expressjs/express)
- [Mongodb](https://github.com/mongodb/mongo)
- [Slack Bolt](https://slack.dev/bolt-js/concepts)

## Setup

Make sure to have `node.js >=16.13.x` installed on your machine.

- Clone the repository by running the command

  ```[bash]
  git clone https://github.com/eokwukwe/slack-bot.git
  ```

- un `npm install` to install the dependencies

- Create a slack bot. [Slack API](https://api.slack.com/apps/). 

- Enable slack app to run on [Socket Mode](https://slack.dev/bolt-js/concepts#socket-mode)

- Create a `.env` file using the sample in the `.env.example` file.

- Start each application by running `npm run dev`.

- Endpoint to retrieve user's responses

  ```javascript
  GET /api/users/:username/answers // 'username' is the user's slack username


  ```
## Deployed URL
> [slack-bot](https://quad-seren-bot.herokuapp.com/)