// Module ID: 15154
// Function ID: 15155
// Name: isOnConsole
// Dependencies: [15113, 15114, 2]
// Exports: default

// Module 15154 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 15113 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 15114 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
