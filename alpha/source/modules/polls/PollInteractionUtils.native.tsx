// Module ID: 12194
// Function ID: 12195
// Name: PollInteractionUtils
// Dependencies: [5208, 12195, 2002, 2]
// Exports: showVotesForAnswer

// Module 12194 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(12195, dependencyMap.paths), "PollVotesActionSheet", obj2);
};
