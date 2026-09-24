// Module ID: 11778
// Function ID: 11779
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4757, 11779, 1984, 2]
// Exports: default

// Module 11778 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(11779, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
