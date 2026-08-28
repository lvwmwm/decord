// Module ID: 11139
// Function ID: 11140
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4413, 11140, 2010, 2]
// Exports: default

// Module 11139 (showExecutedApplicationCommandPopout)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;

const result = set.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.openLazy(asyncRequireImpl(11140, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
