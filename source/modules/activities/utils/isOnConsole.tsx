// Module ID: 12401
// Function ID: 12402
// Name: isOnConsole
// Dependencies: [9326, 9327, 2]
// Exports: default

// Module 12401 (isOnConsole)
import set from "set" /* 2 */;
import isOnXboxDefault from "isOnXbox" /* 9326 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 9327 */;

const result = set.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
