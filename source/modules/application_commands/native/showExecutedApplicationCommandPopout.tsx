// Module ID: 9673
// Function ID: 9674
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4223, 9674, 1959, 2]
// Exports: default

// Module 9673 (showExecutedApplicationCommandPopout)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = importDefault(4223);
  obj.openLazy(require(1959) /* asyncRequireImpl */(9674, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
