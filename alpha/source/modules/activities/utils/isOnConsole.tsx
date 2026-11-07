// Module ID: 15127
// Function ID: 15128
// Name: isOnConsole
// Dependencies: [15086, 15087, 2]
// Exports: default

// Module 15127 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 15086 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 15087 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
