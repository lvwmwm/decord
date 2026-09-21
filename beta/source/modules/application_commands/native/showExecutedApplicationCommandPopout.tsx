// Module ID: 11871
// Function ID: 11872
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4723, 11872, 1980, 2]
// Exports: default

// Module 11871 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(11872, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
