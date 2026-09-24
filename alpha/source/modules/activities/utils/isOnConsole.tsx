// Module ID: 13426
// Function ID: 13427
// Name: isOnConsole
// Dependencies: [13391, 13392, 2]
// Exports: default

// Module 13426 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13391 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13392 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
