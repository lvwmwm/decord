// Module ID: 10170
// Function ID: 10171
// Name: showVotesForAnswer
// Dependencies: [4223, 10171, 1959, 2]
// Exports: showVotesForAnswer

// Module 10170 (showVotesForAnswer)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  let obj = importDefault(4223);
  obj = { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId };
  obj.openLazy(require(1959) /* asyncRequireImpl */(10171, dependencyMap.paths), "PollVotesActionSheet", obj);
};
