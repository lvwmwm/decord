// Module ID: 12042
// Function ID: 12043
// Name: isOnConsole
// Dependencies: [12005, 12006, 2]
// Exports: default

// Module 12042 (isOnConsole)
const result = require("set").fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return importDefault(12005)(arg0) || importDefault(12006)(arg0);
};
