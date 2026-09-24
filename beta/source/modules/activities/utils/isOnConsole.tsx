// Module ID: 13369
// Function ID: 13370
// Name: isOnConsole
// Dependencies: [13334, 13335, 2]
// Exports: default

// Module 13369 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13334 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13335 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
