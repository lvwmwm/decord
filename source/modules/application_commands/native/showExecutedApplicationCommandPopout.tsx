// Module ID: 11086
// Function ID: 11087
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4271, 11087, 2007, 2]
// Exports: default

// Module 11086 (showExecutedApplicationCommandPopout)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = importDefault(4271);
  obj.openLazy(require(2007) /* asyncRequireImpl */(11087, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
