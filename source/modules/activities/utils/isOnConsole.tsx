// Module ID: 11963
// Function ID: 92479
// Name: isOnConsole
// Dependencies: [11926, 11927, 2]
// Exports: default

// Module 11963 (isOnConsole)
const result = require("set").fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  let tmp = importDefault(11926)(arg0);
  if (!tmp) {
    tmp = importDefault(11927)(arg0);
  }
  return tmp;
};
