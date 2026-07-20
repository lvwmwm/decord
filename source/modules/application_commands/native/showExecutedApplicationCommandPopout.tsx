// Module ID: 9481
// Function ID: 73890
// Name: showExecutedApplicationCommandPopout
// Dependencies: []
// Exports: default

// Module 9481 (showExecutedApplicationCommandPopout)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = importDefault(dependencyMap[0]);
  obj.openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
