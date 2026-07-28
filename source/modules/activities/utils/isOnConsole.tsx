// Module ID: 12006
// Function ID: 92649
// Name: isOnConsole
// Dependencies: [11969, 11970, 2]
// Exports: default

// Module 12006 (isOnConsole)
const result = require("set").fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  let tmp = importDefault(11969)(arg0);
  if (!tmp) {
    tmp = importDefault(11970)(arg0);
  }
  return tmp;
};
