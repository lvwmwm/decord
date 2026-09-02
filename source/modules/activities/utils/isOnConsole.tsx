// Module ID: 12692
// Function ID: 12693
// Name: isOnConsole
// Dependencies: [9400, 9401, 2]
// Exports: default

// Module 12692 (isOnConsole)
import set from "set" /* 2 */;
import isOnXboxDefault from "isOnXbox" /* 9400 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 9401 */;

const result = set.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
