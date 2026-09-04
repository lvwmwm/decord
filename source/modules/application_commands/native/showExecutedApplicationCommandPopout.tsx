// Module ID: 11552
// Function ID: 11553
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4448, 11553, 2008, 2]
// Exports: default

// Module 11552 (showExecutedApplicationCommandPopout)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;

const result = set.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.openLazy(asyncRequireImpl(11553, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
