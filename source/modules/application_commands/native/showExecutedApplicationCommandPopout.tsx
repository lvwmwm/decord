// Module ID: 11139
// Function ID: 11140
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4312, 11140, 2007, 2]
// Exports: default

// Module 11139 (showExecutedApplicationCommandPopout)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = importDefault(4312);
  obj.openLazy(require(2007) /* asyncRequireImpl */(11140, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
