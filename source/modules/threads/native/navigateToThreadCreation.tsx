// Module ID: 9767
// Function ID: 75957
// Name: navigateToThreadCreation
// Dependencies: [6024, 3982, 4139, 2]
// Exports: navigateToThreadCreation

// Module 9767 (navigateToThreadCreation)
let result = require("transitionToChannel").fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, SUMMARY_ACTION_SHEET) {
  const result = importDefault(6024).openThreadCreationForMobile(channel, undefined, SUMMARY_ACTION_SHEET);
  const obj = importDefault(6024);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    require(4139) /* transitionToChannel */.transitionToChannel(channel.id);
    const obj3 = require(4139) /* transitionToChannel */;
  }
};
