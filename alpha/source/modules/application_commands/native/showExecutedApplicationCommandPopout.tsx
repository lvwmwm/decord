// Module ID: 12170
// Function ID: 12171
// Name: showExecutedApplicationCommandPopout
// Dependencies: [5257, 12171, 2120, 2]
// Exports: default

// Module 12170 (showExecutedApplicationCommandPopout)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(12171, dependencyMap.paths);
  openLazy(tmp2, "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
