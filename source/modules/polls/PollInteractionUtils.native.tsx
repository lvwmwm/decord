// Module ID: 11647
// Function ID: 11648
// Name: showVotesForAnswer
// Dependencies: [4448, 11648, 2008, 2]
// Exports: showVotesForAnswer

// Module 11647 (showVotesForAnswer)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;

const result = set.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId };
  obj.openLazy(asyncRequireImpl(11648, dependencyMap.paths), "PollVotesActionSheet", obj);
};
