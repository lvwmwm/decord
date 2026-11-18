// Module ID: 12103
// Function ID: 12104
// Name: PollInteractionUtils
// Dependencies: [5037, 12104, 2121, 2]
// Exports: showVotesForAnswer

// Module 12103 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(12104, dependencyMap.paths), "PollVotesActionSheet", obj2);
}
