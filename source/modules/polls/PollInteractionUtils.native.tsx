// Module ID: 9954
// Function ID: 9955
// Name: showVotesForAnswer
// Dependencies: [4157, 9955, 1959, 2]
// Exports: showVotesForAnswer

// Module 9954 (showVotesForAnswer)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  let obj = importDefault(4157);
  obj = { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId };
  obj.openLazy(require(1959) /* asyncRequireImpl */(9955, dependencyMap.paths), "PollVotesActionSheet", obj);
};
