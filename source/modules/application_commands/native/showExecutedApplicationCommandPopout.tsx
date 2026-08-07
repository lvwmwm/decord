// Module ID: 11014
// Function ID: 11015
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4270, 11015, 1988, 2]
// Exports: default

// Module 11014 (showExecutedApplicationCommandPopout)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = importDefault(4270);
  obj.openLazy(require(1988) /* asyncRequireImpl */(11015, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
