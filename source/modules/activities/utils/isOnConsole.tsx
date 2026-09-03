// Module ID: 12704
// Function ID: 12705
// Name: isOnConsole
// Dependencies: [9404, 9405, 2]
// Exports: default

// Module 12704 (isOnConsole)
import set from "set" /* 2 */;
import isOnXboxDefault from "isOnXbox" /* 9404 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 9405 */;

const result = set.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
