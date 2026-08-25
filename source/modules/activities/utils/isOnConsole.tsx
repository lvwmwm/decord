// Module ID: 12519
// Function ID: 12520
// Name: isOnConsole
// Dependencies: [12484, 12485, 2]
// Exports: default

// Module 12519 (isOnConsole)
import set from "set" /* 2 */;
import isOnXboxDefault from "isOnXbox" /* 12484 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 12485 */;

const result = set.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
