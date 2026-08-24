// Module ID: 12186
// Function ID: 12187
// Name: isOnConsole
// Dependencies: [12151, 12152, 2]
// Exports: default

// Module 12186 (isOnConsole)
import set from "set" /* 2 */;
import isOnXboxDefault from "isOnXbox" /* 12151 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 12152 */;

const result = set.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
