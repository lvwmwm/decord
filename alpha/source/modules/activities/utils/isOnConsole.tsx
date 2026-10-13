// Module ID: 13644
// Function ID: 13645
// Name: isOnConsole
// Dependencies: [13609, 13610, 2]
// Exports: default

// Module 13644 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13609 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13610 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
