// Module ID: 10016
// Function ID: 10017
// Name: showExecutedApplicationCommandPopout
// Dependencies: [5196, 10017, 2002, 2]
// Exports: default

// Module 10016 (showExecutedApplicationCommandPopout)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(10017, dependencyMap.paths);
  openLazy(tmp2, "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
