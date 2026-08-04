// Module ID: 10995
// Function ID: 10996
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4253, 10996, 1959, 2]
// Exports: default

// Module 10995 (showExecutedApplicationCommandPopout)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = importDefault(4253);
  obj.openLazy(require(1959) /* asyncRequireImpl */(10996, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
