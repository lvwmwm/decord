// Module ID: 12590
// Function ID: 12591
// Name: isOnConsole
// Dependencies: [12555, 12556, 2]
// Exports: default

// Module 12590 (isOnConsole)
import set from "set" /* 2 */;
import isOnXboxDefault from "isOnXbox" /* 12555 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 12556 */;

const result = set.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
