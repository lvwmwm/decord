// Module ID: 11081
// Function ID: 11082
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4271, 11082, 1988, 2]
// Exports: default

// Module 11081 (showExecutedApplicationCommandPopout)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = importDefault(4271);
  obj.openLazy(require(1988) /* asyncRequireImpl */(11082, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
