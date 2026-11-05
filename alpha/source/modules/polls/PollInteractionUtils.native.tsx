// Module ID: 12768
// Function ID: 12769
// Name: PollInteractionUtils
// Dependencies: [5384, 12769, 2123, 2]
// Exports: showVotesForAnswer

// Module 12768 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(12769, dependencyMap.paths), "PollVotesActionSheet", obj2);
}
