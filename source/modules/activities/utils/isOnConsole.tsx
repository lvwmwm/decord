// Module ID: 13037
// Function ID: 13038
// Name: isOnConsole
// Dependencies: [13002, 13003, 2]
// Exports: default

// Module 13037 (isOnConsole)
import set from "set" /* 2 */;
import isOnXboxDefault from "isOnXbox" /* 13002 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13003 */;

const result = set.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
