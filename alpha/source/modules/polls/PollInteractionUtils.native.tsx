// Module ID: 12209
// Function ID: 12210
// Name: PollInteractionUtils
// Dependencies: [5247, 12210, 2000, 2]
// Exports: showVotesForAnswer

// Module 12209 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(12210, dependencyMap.paths), "PollVotesActionSheet", obj2);
}
