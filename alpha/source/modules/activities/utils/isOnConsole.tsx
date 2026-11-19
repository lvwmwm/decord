// Module ID: 14406
// Function ID: 14407
// Name: isOnConsole
// Dependencies: [14368, 14369, 2]
// Exports: default

// Module 14406 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14368 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14369 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
