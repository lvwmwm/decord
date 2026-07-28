// Module ID: 9807
// Function ID: 76086
// Name: navigateToThreadCreation
// Dependencies: [6058, 4016, 4173, 2]
// Exports: navigateToThreadCreation

// Module 9807 (navigateToThreadCreation)
let result = require("transitionToChannel").fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, SUMMARY_ACTION_SHEET) {
  const result = importDefault(6058).openThreadCreationForMobile(channel, undefined, SUMMARY_ACTION_SHEET);
  const obj = importDefault(6058);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    require(4173) /* transitionToChannel */.transitionToChannel(channel.id);
    const obj3 = require(4173) /* transitionToChannel */;
  }
};
