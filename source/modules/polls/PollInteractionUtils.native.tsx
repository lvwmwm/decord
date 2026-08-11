// Module ID: 10289
// Function ID: 10290
// Name: showVotesForAnswer
// Dependencies: [4271, 10290, 2007, 2]
// Exports: showVotesForAnswer

// Module 10289 (showVotesForAnswer)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  let obj = importDefault(4271);
  obj = { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId };
  obj.openLazy(require(2007) /* asyncRequireImpl */(10290, dependencyMap.paths), "PollVotesActionSheet", obj);
};
