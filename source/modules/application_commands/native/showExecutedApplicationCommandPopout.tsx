// Module ID: 9515
// Function ID: 9516
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4157, 9516, 1959, 2]
// Exports: default

// Module 9515 (showExecutedApplicationCommandPopout)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = importDefault(4157);
  obj.openLazy(require(1959) /* asyncRequireImpl */(9516, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
