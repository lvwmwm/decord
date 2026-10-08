// Module ID: 9596
// Function ID: 9597
// Name: showExecutedApplicationCommandPopout
// Dependencies: [5054, 9597, 1999, 2]
// Exports: default

// Module 9596 (showExecutedApplicationCommandPopout)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(9597, dependencyMap.paths);
  openLazy(tmp2, "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
