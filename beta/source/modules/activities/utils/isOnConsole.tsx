// Module ID: 15160
// Function ID: 15161
// Name: isOnConsole
// Dependencies: [15119, 15120, 2]
// Exports: default

// Module 15160 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 15119 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 15120 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
