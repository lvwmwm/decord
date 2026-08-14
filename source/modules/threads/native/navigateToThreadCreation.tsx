// Module ID: 10224
// Function ID: 10225
// Name: navigateToThreadCreation
// Dependencies: [7291, 4197, 4353, 2]
// Exports: navigateToThreadCreation

// Module 10224 (navigateToThreadCreation)
let result = require("transitionToChannel").fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = importDefault(7291).openThreadCreationForMobile(channel, undefined, Message);
  const obj = importDefault(7291);
  const tmp3 = require;
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    tmp3(4353).transitionToChannel(channel.id);
    const tmp3Result = tmp3(4353);
  }
};
