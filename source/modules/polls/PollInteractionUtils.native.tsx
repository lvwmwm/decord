// Module ID: 10330
// Function ID: 10331
// Name: showVotesForAnswer
// Dependencies: [4312, 10331, 2007, 2]
// Exports: showVotesForAnswer

// Module 10330 (showVotesForAnswer)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  let obj = importDefault(4312);
  obj = { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId };
  obj.openLazy(require(2007) /* asyncRequireImpl */(10331, dependencyMap.paths), "PollVotesActionSheet", obj);
};
