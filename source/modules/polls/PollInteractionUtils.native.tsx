// Module ID: 10284
// Function ID: 10285
// Name: showVotesForAnswer
// Dependencies: [4271, 10285, 1988, 2]
// Exports: showVotesForAnswer

// Module 10284 (showVotesForAnswer)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  let obj = importDefault(4271);
  obj = { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId };
  obj.openLazy(require(1988) /* asyncRequireImpl */(10285, dependencyMap.paths), "PollVotesActionSheet", obj);
};
