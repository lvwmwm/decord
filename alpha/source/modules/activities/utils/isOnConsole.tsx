// Module ID: 14419
// Function ID: 14420
// Name: isOnConsole
// Dependencies: [14381, 14382, 2]
// Exports: default

// Module 14419 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14381 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
