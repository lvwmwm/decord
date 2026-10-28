// Module ID: 12155
// Function ID: 12156
// Name: PollInteractionUtils
// Dependencies: [5246, 12156, 1999, 2]
// Exports: showVotesForAnswer

// Module 12155 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(12156, dependencyMap.paths), "PollVotesActionSheet", obj2);
};
