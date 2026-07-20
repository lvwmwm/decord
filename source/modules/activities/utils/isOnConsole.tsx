// Module ID: 11940
// Function ID: 92331
// Name: isOnConsole
// Dependencies: []
// Exports: default

// Module 11940 (isOnConsole)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  let tmp = importDefault(dependencyMap[0])(arg0);
  if (!tmp) {
    tmp = importDefault(dependencyMap[1])(arg0);
  }
  return tmp;
};
