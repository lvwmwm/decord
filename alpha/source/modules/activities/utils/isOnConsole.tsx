// Module ID: 14088
// Function ID: 14089
// Name: isOnConsole
// Dependencies: [14053, 14054, 2]
// Exports: default

// Module 14088 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14053 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
