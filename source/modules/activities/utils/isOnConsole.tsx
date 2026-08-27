// Module ID: 12382
// Function ID: 12383
// Name: isOnConsole
// Dependencies: [9308, 9309, 2]
// Exports: default

// Module 12382 (isOnConsole)
import set from "set" /* 2 */;
import isOnXboxDefault from "isOnXbox" /* 9308 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 9309 */;

const result = set.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
