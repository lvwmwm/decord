// Module ID: 12435
// Function ID: 12436
// Name: isOnConsole
// Dependencies: [9348, 9349, 2]
// Exports: default

// Module 12435 (isOnConsole)
import set from "set" /* 2 */;
import isOnXboxDefault from "isOnXbox" /* 9348 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 9349 */;

const result = set.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
