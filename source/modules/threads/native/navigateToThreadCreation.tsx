// Module ID: 9826
// Function ID: 9827
// Name: navigateToThreadCreation
// Dependencies: [6074, 4040, 4197, 2]
// Exports: navigateToThreadCreation

// Module 9826 (navigateToThreadCreation)
let result = require("transitionToChannel").fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = importDefault(6074).openThreadCreationForMobile(channel, undefined, Message);
  const obj = importDefault(6074);
  const tmp3 = require;
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    tmp3(4197).transitionToChannel(channel.id);
    const tmp3Result = tmp3(4197);
  }
};
