// Module ID: 9829
// Function ID: 9830
// Name: navigateToThreadCreation
// Dependencies: [6076, 4040, 4197, 2]
// Exports: navigateToThreadCreation

// Module 9829 (navigateToThreadCreation)
let result = require("transitionToChannel").fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = importDefault(6076).openThreadCreationForMobile(channel, undefined, Message);
  const obj = importDefault(6076);
  const tmp3 = require;
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    tmp3(4197).transitionToChannel(channel.id);
    const tmp3Result = tmp3(4197);
  }
};
