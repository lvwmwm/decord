// Module ID: 12228
// Function ID: 12229
// Name: PollInteractionUtils
// Dependencies: [5257, 12229, 2120, 2]
// Exports: showVotesForAnswer

// Module 12228 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(12229, dependencyMap.paths), "PollVotesActionSheet", obj2);
}
