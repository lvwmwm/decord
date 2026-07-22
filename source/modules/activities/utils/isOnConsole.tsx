// Module ID: 11948
// Function ID: 92380
// Name: isOnConsole
// Dependencies: []
// Exports: default

// Module 11948 (isOnConsole)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  let tmp = importDefault(dependencyMap[0])(arg0);
  if (!tmp) {
    tmp = importDefault(dependencyMap[1])(arg0);
  }
  return tmp;
};
