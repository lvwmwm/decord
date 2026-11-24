// Module ID: 12079
// Function ID: 12080
// Name: PollInteractionUtils
// Dependencies: [5131, 12080, 2119, 2]
// Exports: showVotesForAnswer

// Module 12079 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(12080, dependencyMap.paths), "PollVotesActionSheet", obj2);
}
