// Module ID: 9798
// Function ID: 76086
// Name: navigateToThreadCreation
// Dependencies: []
// Exports: navigateToThreadCreation

// Module 9798 (navigateToThreadCreation)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, SUMMARY_ACTION_SHEET) {
  const result = importDefault(dependencyMap[0]).openThreadCreationForMobile(channel, undefined, SUMMARY_ACTION_SHEET);
  const obj = importDefault(dependencyMap[0]);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    require(dependencyMap[2]).transitionToChannel(channel.id);
    const obj3 = require(dependencyMap[2]);
  }
};
