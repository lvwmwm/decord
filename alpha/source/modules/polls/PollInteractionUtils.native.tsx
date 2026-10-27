// Module ID: 12117
// Function ID: 12118
// Name: PollInteractionUtils
// Dependencies: [5211, 12118, 1999, 2]
// Exports: showVotesForAnswer

// Module 12117 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(12118, dependencyMap.paths), "PollVotesActionSheet", obj2);
};
