// Module ID: 12151
// Function ID: 12152
// Name: PollInteractionUtils
// Dependencies: [5127, 12152, 2119, 2]
// Exports: showVotesForAnswer

// Module 12151 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(12152, dependencyMap.paths), "PollVotesActionSheet", obj2);
}
