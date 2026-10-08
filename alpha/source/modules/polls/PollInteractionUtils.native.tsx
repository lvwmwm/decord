// Module ID: 11535
// Function ID: 11536
// Name: PollInteractionUtils
// Dependencies: [5054, 11536, 1999, 2]
// Exports: showVotesForAnswer

// Module 11535 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(11536, dependencyMap.paths), "PollVotesActionSheet", obj2);
};
