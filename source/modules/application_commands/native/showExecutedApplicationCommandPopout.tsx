// Module ID: 11433
// Function ID: 11434
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4445, 11434, 2008, 2]
// Exports: default

// Module 11433 (showExecutedApplicationCommandPopout)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.openLazy(asyncRequireImpl(11434, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
