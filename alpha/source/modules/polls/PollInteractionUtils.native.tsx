// Module ID: 11464
// Function ID: 11465
// Name: PollInteractionUtils
// Dependencies: [5055, 11465, 2000, 2]
// Exports: showVotesForAnswer

// Module 11464 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(11465, dependencyMap.paths), "PollVotesActionSheet", obj2);
};
