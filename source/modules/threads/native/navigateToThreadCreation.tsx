// Module ID: 10097
// Function ID: 10098
// Name: navigateToThreadCreation
// Dependencies: [7164, 4152, 4310, 2]
// Exports: navigateToThreadCreation

// Module 10097 (navigateToThreadCreation)
let result = require("transitionToChannel").fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = importDefault(7164).openThreadCreationForMobile(channel, undefined, Message);
  const obj = importDefault(7164);
  const tmp3 = require;
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    tmp3(4310).transitionToChannel(channel.id);
    const tmp3Result = tmp3(4310);
  }
};
