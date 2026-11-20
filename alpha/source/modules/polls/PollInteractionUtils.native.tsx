// Module ID: 12022
// Function ID: 12023
// Name: PollInteractionUtils
// Dependencies: [5008, 12023, 2119, 2]
// Exports: showVotesForAnswer

// Module 12022 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(12023, dependencyMap.paths), "PollVotesActionSheet", obj2);
}
