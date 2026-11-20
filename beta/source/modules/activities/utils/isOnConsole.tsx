// Module ID: 15755
// Function ID: 15756
// Name: isOnConsole
// Dependencies: [15716, 15717, 2]
// Exports: default

// Module 15755 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 15716 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 15717 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
