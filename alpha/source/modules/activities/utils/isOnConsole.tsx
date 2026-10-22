// Module ID: 14256
// Function ID: 14257
// Name: isOnConsole
// Dependencies: [14221, 14222, 2]
// Exports: default

// Module 14256 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14221 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14222 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
