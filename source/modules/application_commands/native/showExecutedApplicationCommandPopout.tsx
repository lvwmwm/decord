// Module ID: 9494
// Function ID: 73971
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4098, 9495, 1934, 2]
// Exports: default

// Module 9494 (showExecutedApplicationCommandPopout)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = importDefault(4098);
  obj.openLazy(require(1934) /* maybeLoadBundle */(9495, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
