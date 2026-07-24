// Module ID: 9530
// Function ID: 74180
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4098, 9531, 1934, 2]
// Exports: default

// Module 9530 (showExecutedApplicationCommandPopout)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = importDefault(4098);
  obj.openLazy(require(1934) /* maybeLoadBundle */(9531, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
