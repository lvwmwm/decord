// Module ID: 11240
// Function ID: 11241
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4411, 11241, 2009, 2]
// Exports: default

// Module 11240 (showExecutedApplicationCommandPopout)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4411 */;

const result = set.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.openLazy(asyncRequireImpl(11241, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
