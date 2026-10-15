// Module ID: 9863
// Function ID: 9864
// Name: showExecutedApplicationCommandPopout
// Dependencies: [5115, 9864, 2000, 2]
// Exports: default

// Module 9863 (showExecutedApplicationCommandPopout)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(9864, dependencyMap.paths);
  openLazy(tmp2, "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
