// Module ID: 11183
// Function ID: 11184
// Name: showVotesForAnswer
// Dependencies: [4310, 11184, 2007, 2]
// Exports: showVotesForAnswer

// Module 11183 (showVotesForAnswer)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  let obj = importDefault(4310);
  obj = { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId };
  obj.openLazy(require(2007) /* asyncRequireImpl */(11184, dependencyMap.paths), "PollVotesActionSheet", obj);
};
