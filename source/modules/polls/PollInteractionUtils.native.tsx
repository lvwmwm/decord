// Module ID: 9922
// Function ID: 76784
// Name: showVotesForAnswer
// Dependencies: []
// Exports: showVotesForAnswer

// Module 9922 (showVotesForAnswer)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  let obj = importDefault(dependencyMap[0]);
  obj = { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId };
  obj.openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "PollVotesActionSheet", obj);
};
