// Module ID: 11753
// Function ID: 11754
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4603, 11754, 1896, 2]
// Exports: default

// Module 11753 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(11754, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
