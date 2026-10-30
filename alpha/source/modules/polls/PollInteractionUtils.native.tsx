// Module ID: 12365
// Function ID: 12366
// Name: PollInteractionUtils
// Dependencies: [5253, 12366, 1995, 2]
// Exports: showVotesForAnswer

// Module 12365 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(12366, dependencyMap.paths), "PollVotesActionSheet", obj2);
}
