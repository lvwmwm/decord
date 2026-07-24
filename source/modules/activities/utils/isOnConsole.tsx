// Module ID: 11986
// Function ID: 92669
// Name: isOnConsole
// Dependencies: [11949, 11950, 2]
// Exports: default

// Module 11986 (isOnConsole)
const result = require("set").fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  let tmp = importDefault(11949)(arg0);
  if (!tmp) {
    tmp = importDefault(11950)(arg0);
  }
  return tmp;
};
