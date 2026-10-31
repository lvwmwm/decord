// Module ID: 12403
// Function ID: 12404
// Name: PollInteractionUtils
// Dependencies: [5258, 12404, 1994, 2]
// Exports: showVotesForAnswer

// Module 12403 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(12404, dependencyMap.paths), "PollVotesActionSheet", obj2);
}
