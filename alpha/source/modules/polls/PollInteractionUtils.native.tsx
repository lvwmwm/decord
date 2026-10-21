// Module ID: 12145
// Function ID: 12146
// Name: PollInteractionUtils
// Dependencies: [5192, 12146, 2002, 2]
// Exports: showVotesForAnswer

// Module 12145 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(12146, dependencyMap.paths), "PollVotesActionSheet", obj2);
};
