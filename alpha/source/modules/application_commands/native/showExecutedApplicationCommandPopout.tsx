// Module ID: 11284
// Function ID: 11285
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4800, 11285, 1981, 2]
// Exports: default

// Module 11284 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(11285, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
