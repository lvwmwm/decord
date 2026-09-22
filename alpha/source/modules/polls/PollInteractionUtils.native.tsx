// Module ID: 11972
// Function ID: 11973
// Name: PollInteractionUtils
// Dependencies: [4724, 11973, 1980, 2]
// Exports: showVotesForAnswer

// Module 11972 (PollInteractionUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/PollInteractionUtils.native.tsx");

export const showVotesForAnswer = function showVotesForAnswer(initialAnswerId) {
  const message = initialAnswerId.message;
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11973, dependencyMap.paths), "PollVotesActionSheet", { channelId: message.channel_id, messageId: message.id, initialAnswerId: initialAnswerId.initialAnswerId });
};
