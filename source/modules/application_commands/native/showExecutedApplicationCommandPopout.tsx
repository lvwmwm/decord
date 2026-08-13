// Module ID: 11055
// Function ID: 11056
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4310, 11056, 2007, 2]
// Exports: default

// Module 11055 (showExecutedApplicationCommandPopout)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = importDefault(4310);
  obj.openLazy(require(2007) /* asyncRequireImpl */(11056, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
