// Module ID: 11101
// Function ID: 11102
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4796, 11102, 1980, 2]
// Exports: default

// Module 11101 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(11102, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
