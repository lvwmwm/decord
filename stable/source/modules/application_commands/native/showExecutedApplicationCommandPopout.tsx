// Module ID: 11900
// Function ID: 11901
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4755, 11901, 1980, 2]
// Exports: default

// Module 11900 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(11901, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
