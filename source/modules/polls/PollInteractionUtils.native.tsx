// Module ID: 11167
// Function ID: 11168
// Name: showVotesForAnswer
// Dependencies: [4310, 11168, 2007, 2]
// Exports: showVotesForAnswer

// Module 11167 (showVotesForAnswer)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  let obj = importDefault(4310);
  obj = { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId };
  obj.openLazy(require(2007) /* asyncRequireImpl */(11168, dependencyMap.paths), "PollVotesActionSheet", obj);
};
