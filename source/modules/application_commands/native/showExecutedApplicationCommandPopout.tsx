// Module ID: 11080
// Function ID: 11081
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4271, 11081, 1988, 2]
// Exports: default

// Module 11080 (showExecutedApplicationCommandPopout)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = importDefault(4271);
  obj.openLazy(require(1988) /* asyncRequireImpl */(11081, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
