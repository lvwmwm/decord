// Module ID: 11243
// Function ID: 11244
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4854, 11244, 1987, 2]
// Exports: default

// Module 11243 (showExecutedApplicationCommandPopout)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(11244, dependencyMap.paths);
  openLazy(tmp2, "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
