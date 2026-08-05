// Module ID: 10967
// Function ID: 10968
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4223, 10968, 1959, 2]
// Exports: default

// Module 10967 (showExecutedApplicationCommandPopout)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = importDefault(4223);
  obj.openLazy(require(1959) /* asyncRequireImpl */(10968, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
