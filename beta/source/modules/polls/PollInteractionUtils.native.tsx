// Module ID: 11087
// Function ID: 11088
// Name: PollInteractionUtils
// Dependencies: [4801, 11088, 1987, 2]
// Exports: showVotesForAnswer

// Module 11087 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(11088, dependencyMap.paths), "PollVotesActionSheet", obj2);
};
