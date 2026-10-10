// Module ID: 13157
// Function ID: 13158
// Name: isOnConsole
// Dependencies: [13120, 13121, 2]
// Exports: default

// Module 13157 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13120 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13121 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
