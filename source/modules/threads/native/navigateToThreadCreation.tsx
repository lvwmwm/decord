// Module ID: 9811
// Function ID: 76167
// Name: navigateToThreadCreation
// Dependencies: [7007, 3981, 4138, 2]
// Exports: navigateToThreadCreation

// Module 9811 (navigateToThreadCreation)
let result = require("transitionToChannel").fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, SUMMARY_ACTION_SHEET) {
  const result = importDefault(7007).openThreadCreationForMobile(channel, undefined, SUMMARY_ACTION_SHEET);
  const obj = importDefault(7007);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    require(4138) /* transitionToChannel */.transitionToChannel(channel.id);
    const obj3 = require(4138) /* transitionToChannel */;
  }
};
