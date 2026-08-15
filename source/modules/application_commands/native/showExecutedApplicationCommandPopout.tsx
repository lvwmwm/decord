// Module ID: 10805
// Function ID: 10806
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4342, 10806, 2007, 2]
// Exports: default

// Module 10805 (showExecutedApplicationCommandPopout)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = importDefault(4342);
  obj.openLazy(require(2007) /* asyncRequireImpl */(10806, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
