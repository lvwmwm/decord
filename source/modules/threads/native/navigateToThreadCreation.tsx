// Module ID: 10081
// Function ID: 10082
// Name: navigateToThreadCreation
// Dependencies: [7145, 4135, 4293, 2]
// Exports: navigateToThreadCreation

// Module 10081 (navigateToThreadCreation)
let result = require("transitionToChannel").fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = importDefault(7145).openThreadCreationForMobile(channel, undefined, Message);
  const obj = importDefault(7145);
  const tmp3 = require;
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    tmp3(4293).transitionToChannel(channel.id);
    const tmp3Result = tmp3(4293);
  }
};
