// Module ID: 9451
// Function ID: 73768
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4099, 9452, 1935, 2]
// Exports: default

// Module 9451 (showExecutedApplicationCommandPopout)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = importDefault(4099);
  obj.openLazy(require(1935) /* maybeLoadBundle */(9452, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
