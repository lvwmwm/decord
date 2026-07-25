// Module ID: 11962
// Function ID: 92474
// Name: isOnConsole
// Dependencies: [11925, 11926, 2]
// Exports: default

// Module 11962 (isOnConsole)
const result = require("set").fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  let tmp = importDefault(11925)(arg0);
  if (!tmp) {
    tmp = importDefault(11926)(arg0);
  }
  return tmp;
};
