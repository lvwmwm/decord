// Module ID: 11205
// Function ID: 11206
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4445, 11206, 2009, 2]
// Exports: default

// Module 11205 (showExecutedApplicationCommandPopout)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.openLazy(asyncRequireImpl(11206, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
