// Module ID: 11509
// Function ID: 11510
// Name: PollInteractionUtils
// Dependencies: [5056, 11510, 2000, 2]
// Exports: showVotesForAnswer

// Module 11509 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(11510, dependencyMap.paths), "PollVotesActionSheet", obj2);
};
