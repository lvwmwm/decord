// Module ID: 9843
// Function ID: 76361
// Name: navigateToThreadCreation
// Dependencies: [7006, 3981, 4138, 2]
// Exports: navigateToThreadCreation

// Module 9843 (navigateToThreadCreation)
let result = require("transitionToChannel").fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, SUMMARY_ACTION_SHEET) {
  const result = importDefault(7006).openThreadCreationForMobile(channel, undefined, SUMMARY_ACTION_SHEET);
  const obj = importDefault(7006);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    require(4138) /* transitionToChannel */.transitionToChannel(channel.id);
    const obj3 = require(4138) /* transitionToChannel */;
  }
};
