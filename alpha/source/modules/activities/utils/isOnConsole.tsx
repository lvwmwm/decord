// Module ID: 14270
// Function ID: 14271
// Name: isOnConsole
// Dependencies: [14235, 14236, 2]
// Exports: default

// Module 14270 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14235 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14236 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
