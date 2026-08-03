// Module ID: 10114
// Function ID: 10115
// Name: showVotesForAnswer
// Dependencies: [4223, 10115, 1959, 2]
// Exports: showVotesForAnswer

// Module 10114 (showVotesForAnswer)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  let obj = importDefault(4223);
  obj = { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId };
  obj.openLazy(require(1959) /* asyncRequireImpl */(10115, dependencyMap.paths), "PollVotesActionSheet", obj);
};
