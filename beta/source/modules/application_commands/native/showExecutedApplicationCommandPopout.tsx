// Module ID: 11742
// Function ID: 11743
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4725, 11743, 1984, 2]
// Exports: default

// Module 11742 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(11743, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
