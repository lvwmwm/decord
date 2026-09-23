// Module ID: 11951
// Function ID: 11952
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4794, 11952, 1980, 2]
// Exports: default

// Module 11951 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(11952, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
