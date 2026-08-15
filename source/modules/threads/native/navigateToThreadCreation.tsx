// Module ID: 10424
// Function ID: 10425
// Name: navigateToThreadCreation
// Dependencies: [7512, 4229, 4768, 2]
// Exports: navigateToThreadCreation

// Module 10424 (navigateToThreadCreation)
let result = require("transitionToChannel").fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = importDefault(7512).openThreadCreationForMobile(channel, undefined, Message);
  const obj = importDefault(7512);
  const tmp3 = require;
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    tmp3(4768).transitionToChannel(channel.id);
    const tmp3Result = tmp3(4768);
  }
};
