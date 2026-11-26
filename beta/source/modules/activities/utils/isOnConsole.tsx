// Module ID: 14507
// Function ID: 14508
// Name: isOnConsole
// Dependencies: [14469, 14470, 2]
// Exports: default

// Module 14507 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14469 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14470 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
