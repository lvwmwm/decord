// Module ID: 11983
// Function ID: 11984
// Name: PollInteractionUtils
// Dependencies: [5118, 11984, 2002, 2]
// Exports: showVotesForAnswer

// Module 11983 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(11984, dependencyMap.paths), "PollVotesActionSheet", obj2);
};
