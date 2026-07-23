// Module ID: 9936
// Function ID: 76864
// Name: showVotesForAnswer
// Dependencies: [4098, 9937, 1934, 2]
// Exports: showVotesForAnswer

// Module 9936 (showVotesForAnswer)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  let obj = importDefault(4098);
  obj = { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId };
  obj.openLazy(require(1934) /* maybeLoadBundle */(9937, dependencyMap.paths), "PollVotesActionSheet", obj);
};
