// Module ID: 12043
// Function ID: 12044
// Name: PollInteractionUtils
// Dependencies: [5155, 12044, 2002, 2]
// Exports: showVotesForAnswer

// Module 12043 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(12044, dependencyMap.paths), "PollVotesActionSheet", obj2);
};
