// Module ID: 10169
// Function ID: 10170
// Name: navigateToThreadCreation
// Dependencies: [7225, 4158, 4311, 2]
// Exports: navigateToThreadCreation

// Module 10169 (navigateToThreadCreation)
let result = require("transitionToChannel").fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = importDefault(7225).openThreadCreationForMobile(channel, undefined, Message);
  const obj = importDefault(7225);
  const tmp3 = require;
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    tmp3(4311).transitionToChannel(channel.id);
    const tmp3Result = tmp3(4311);
  }
};
