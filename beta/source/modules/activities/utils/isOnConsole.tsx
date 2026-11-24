// Module ID: 14494
// Function ID: 14495
// Name: isOnConsole
// Dependencies: [14456, 14457, 2]
// Exports: default

// Module 14494 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14456 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14457 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
