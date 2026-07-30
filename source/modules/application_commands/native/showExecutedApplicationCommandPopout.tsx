// Module ID: 9511
// Function ID: 9512
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4157, 9512, 1959, 2]
// Exports: default

// Module 9511 (showExecutedApplicationCommandPopout)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = importDefault(4157);
  obj.openLazy(require(1959) /* asyncRequireImpl */(9512, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
