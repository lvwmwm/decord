// Module ID: 10210
// Function ID: 10211
// Name: navigateToThreadCreation
// Dependencies: [7269, 4197, 4353, 2]
// Exports: navigateToThreadCreation

// Module 10210 (navigateToThreadCreation)
let result = require("transitionToChannel").fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = importDefault(7269).openThreadCreationForMobile(channel, undefined, Message);
  const obj = importDefault(7269);
  const tmp3 = require;
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    tmp3(4353).transitionToChannel(channel.id);
    const tmp3Result = tmp3(4353);
  }
};
