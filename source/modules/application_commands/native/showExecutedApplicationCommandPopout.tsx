// Module ID: 9526
// Function ID: 9527
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4161, 9527, 1959, 2]
// Exports: default

// Module 9526 (showExecutedApplicationCommandPopout)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = importDefault(4161);
  obj.openLazy(require(1959) /* asyncRequireImpl */(9527, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
