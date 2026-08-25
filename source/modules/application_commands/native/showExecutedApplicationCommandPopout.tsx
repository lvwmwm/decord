// Module ID: 11168
// Function ID: 11169
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4347, 11169, 2009, 2]
// Exports: default

// Module 11168 (showExecutedApplicationCommandPopout)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;

const result = set.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.openLazy(asyncRequireImpl(11169, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
