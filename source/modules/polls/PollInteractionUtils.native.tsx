// Module ID: 10884
// Function ID: 10885
// Name: showVotesForAnswer
// Dependencies: [4342, 10885, 2007, 2]
// Exports: showVotesForAnswer

// Module 10884 (showVotesForAnswer)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  let obj = importDefault(4342);
  obj = { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId };
  obj.openLazy(require(2007) /* asyncRequireImpl */(10885, dependencyMap.paths), "PollVotesActionSheet", obj);
};
