// Module ID: 15157
// Function ID: 15158
// Name: isOnConsole
// Dependencies: [15116, 15117, 2]
// Exports: default

// Module 15157 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 15116 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 15117 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
