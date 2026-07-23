// Module ID: 11960
// Function ID: 92433
// Name: isOnConsole
// Dependencies: [11922, 11923, 2]
// Exports: default

// Module 11960 (isOnConsole)
const result = require("set").fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  let tmp = importDefault(11922)(arg0);
  if (!tmp) {
    tmp = importDefault(11923)(arg0);
  }
  return tmp;
};
