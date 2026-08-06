// Module ID: 10999
// Function ID: 11000
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4253, 11000, 1988, 2]
// Exports: default

// Module 10999 (showExecutedApplicationCommandPopout)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = importDefault(4253);
  obj.openLazy(require(1988) /* asyncRequireImpl */(11000, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
