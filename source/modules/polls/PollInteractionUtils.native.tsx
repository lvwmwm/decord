// Module ID: 9896
// Function ID: 76673
// Name: showVotesForAnswer
// Dependencies: [4099, 9897, 1935, 2]
// Exports: showVotesForAnswer

// Module 9896 (showVotesForAnswer)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  let obj = importDefault(4099);
  obj = { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId };
  obj.openLazy(require(1935) /* maybeLoadBundle */(9897, dependencyMap.paths), "PollVotesActionSheet", obj);
};
