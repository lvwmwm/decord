// Module ID: 14374
// Function ID: 14375
// Name: isOnConsole
// Dependencies: [14336, 14337, 2]
// Exports: default

// Module 14374 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14336 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14337 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
