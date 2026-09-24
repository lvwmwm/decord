// Module ID: 11958
// Function ID: 11959
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4796, 11959, 1980, 2]
// Exports: default

// Module 11958 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(11959, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
