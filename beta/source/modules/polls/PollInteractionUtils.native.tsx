// Module ID: 12147
// Function ID: 12148
// Name: PollInteractionUtils
// Dependencies: [5127, 12148, 2119, 2]
// Exports: showVotesForAnswer

// Module 12147 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(12148, dependencyMap.paths), "PollVotesActionSheet", obj2);
}
