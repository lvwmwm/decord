// Module ID: 9958
// Function ID: 9959
// Name: showVotesForAnswer
// Dependencies: [4157, 9959, 1959, 2]
// Exports: showVotesForAnswer

// Module 9958 (showVotesForAnswer)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  let obj = importDefault(4157);
  obj = { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId };
  obj.openLazy(require(1959) /* asyncRequireImpl */(9959, dependencyMap.paths), "PollVotesActionSheet", obj);
};
