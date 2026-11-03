// Module ID: 15024
// Function ID: 15025
// Name: isOnConsole
// Dependencies: [14983, 14984, 2]
// Exports: default

// Module 15024 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14983 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14984 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
