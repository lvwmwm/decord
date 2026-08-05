// Module ID: 10050
// Function ID: 10051
// Name: navigateToThreadCreation
// Dependencies: [7118, 4106, 4263, 2]
// Exports: navigateToThreadCreation

// Module 10050 (navigateToThreadCreation)
let result = require("transitionToChannel").fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = importDefault(7118).openThreadCreationForMobile(channel, undefined, Message);
  const obj = importDefault(7118);
  const tmp3 = require;
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    tmp3(4263).transitionToChannel(channel.id);
    const tmp3Result = tmp3(4263);
  }
};
