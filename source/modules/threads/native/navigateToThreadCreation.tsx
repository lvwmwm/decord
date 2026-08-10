// Module ID: 10164
// Function ID: 10165
// Name: navigateToThreadCreation
// Dependencies: [7224, 4158, 4311, 2]
// Exports: navigateToThreadCreation

// Module 10164 (navigateToThreadCreation)
let result = require("transitionToChannel").fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = importDefault(7224).openThreadCreationForMobile(channel, undefined, Message);
  const obj = importDefault(7224);
  const tmp3 = require;
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    tmp3(4311).transitionToChannel(channel.id);
    const tmp3Result = tmp3(4311);
  }
};
