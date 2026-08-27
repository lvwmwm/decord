// Module ID: 11121
// Function ID: 11122
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4412, 11122, 2009, 2]
// Exports: default

// Module 11121 (showExecutedApplicationCommandPopout)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;

const result = set.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.openLazy(asyncRequireImpl(11122, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
