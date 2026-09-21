// Module ID: 13333
// Function ID: 13334
// Name: isOnConsole
// Dependencies: [13298, 13299, 2]
// Exports: default

// Module 13333 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13298 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13299 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
