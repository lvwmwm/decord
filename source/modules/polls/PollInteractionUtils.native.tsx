// Module ID: 10217
// Function ID: 10218
// Name: showVotesForAnswer
// Dependencies: [4270, 10218, 1988, 2]
// Exports: showVotesForAnswer

// Module 10217 (showVotesForAnswer)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  let obj = importDefault(4270);
  obj = { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId };
  obj.openLazy(require(1988) /* asyncRequireImpl */(10218, dependencyMap.paths), "PollVotesActionSheet", obj);
};
