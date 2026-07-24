// Module ID: 9968
// Function ID: 77058
// Name: showVotesForAnswer
// Dependencies: [4098, 9969, 1934, 2]
// Exports: showVotesForAnswer

// Module 9968 (showVotesForAnswer)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  let obj = importDefault(4098);
  obj = { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId };
  obj.openLazy(require(1934) /* maybeLoadBundle */(9969, dependencyMap.paths), "PollVotesActionSheet", obj);
};
