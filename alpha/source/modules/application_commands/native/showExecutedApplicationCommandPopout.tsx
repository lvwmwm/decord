// Module ID: 11875
// Function ID: 11876
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4724, 11876, 1980, 2]
// Exports: default

// Module 11875 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(11876, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
