// Module ID: 12778
// Function ID: 12779
// Name: PollInteractionUtils
// Dependencies: [5406, 12779, 2118, 2]
// Exports: showVotesForAnswer

// Module 12778 (PollInteractionUtils)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export function showVotesForAnswer(message) {
  message = message.message;
  const initialAnswerId = message.initialAnswerId;
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: message.channel_id, messageId: message.id, initialAnswerId };
  obj.openLazy(asyncRequire(12779, dependencyMap.paths), "PollVotesActionSheet", obj2);
}
