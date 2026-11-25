// Module ID: 12178
// Function ID: 12179
// Name: PollInteractionUtils
// Dependencies: [5226, 12179, 2119, 2]
// Exports: showVotesForAnswer

// Module 12178 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(12179, dependencyMap.paths), "PollVotesActionSheet", obj2);
}
