// Module ID: 12679
// Function ID: 12680
// Name: PollInteractionUtils
// Dependencies: [5381, 12680, 2123, 2]
// Exports: showVotesForAnswer

// Module 12679 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(12680, dependencyMap.paths), "PollVotesActionSheet", obj2);
}
