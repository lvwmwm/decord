// Module ID: 11620
// Function ID: 11621
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4527, 11621, 1896, 2]
// Exports: default

// Module 11620 (showExecutedApplicationCommandPopout)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.openLazy(asyncRequireImpl(11621, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
