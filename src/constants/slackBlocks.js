export const welcomeBlock = [
  {
    type: 'section',
    block_id: 'welcomeSection',
    text: {
      type: 'mrkdwn',
      text: 'Welcome. How are you doing?',
    },
    accessory: {
      action_id: 'welcome_action',
      type: 'static_select',
      placeholder: {
        type: 'plain_text',
        text: 'Tell us',
      },
      options: [
        {
          text: {
            type: 'plain_text',
            text: 'Doing Well',
          },
          value: 'doing well',
        },
        {
          text: {
            type: 'plain_text',
            text: 'Neutral',
          },
          value: 'neutral',
        },
        {
          text: {
            type: 'plain_text',
            text: 'Feeling Lucky',
          },
          value: 'feeling lucky',
        },
      ],
    },
  },
];

export const hobbiesBlock = [
  {
    type: 'section',
    block_id: 'hobbiesSection',
    text: {
      type: 'mrkdwn',
      text: 'What are your favorite hobbies?',
    },
    accessory: {
      action_id: 'hobbies_action',
      type: 'multi_static_select',
      placeholder: {
        type: 'plain_text',
        text: 'Pick favorite hobbies',
      },
      options: [
        {
          text: {
            type: 'plain_text',
            text: 'Football',
          },
          value: 'football',
        },
        {
          text: {
            type: 'plain_text',
            text: 'Music',
          },
          value: 'music',
        },
        {
          text: {
            type: 'plain_text',
            text: 'Sleep',
          },
          value: 'sleep',
        },
        {
          text: {
            type: 'plain_text',
            text: 'Movies',
          },
          value: 'movies',
        },
        {
          text: {
            type: 'plain_text',
            text: 'Basketball',
          },
          value: 'basketball',
        },
      ],
    },
  },
];
