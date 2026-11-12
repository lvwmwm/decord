// Module ID: 15639
// Function ID: 15640
// Name: isOnConsole
// Dependencies: [15600, 15601, 2]
// Exports: default

// Module 15639 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 15600 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 15601 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
