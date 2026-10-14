// Module ID: 13682
// Function ID: 13683
// Name: isOnConsole
// Dependencies: [13647, 13648, 2]
// Exports: default

// Module 13682 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13647 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13648 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
