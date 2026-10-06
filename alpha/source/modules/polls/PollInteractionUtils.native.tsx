// Module ID: 11358
// Function ID: 11359
// Name: PollInteractionUtils
// Dependencies: [4860, 11359, 1987, 2]
// Exports: showVotesForAnswer

// Module 11358 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(11359, dependencyMap.paths), "PollVotesActionSheet", obj2);
};
