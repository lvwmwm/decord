// Module ID: 9491
// Function ID: 73896
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4133, 9492, 1935, 2]
// Exports: default

// Module 9491 (showExecutedApplicationCommandPopout)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = importDefault(4133);
  obj.openLazy(require(1935) /* maybeLoadBundle */(9492, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
