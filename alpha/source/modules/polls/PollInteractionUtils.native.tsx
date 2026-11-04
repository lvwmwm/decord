// Module ID: 12761
// Function ID: 12762
// Name: PollInteractionUtils
// Dependencies: [5382, 12762, 2123, 2]
// Exports: showVotesForAnswer

// Module 12761 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(12762, dependencyMap.paths), "PollVotesActionSheet", obj2);
}
