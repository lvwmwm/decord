// Module ID: 14218
// Function ID: 14219
// Name: isOnConsole
// Dependencies: [14183, 14184, 2]
// Exports: default

// Module 14218 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14183 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14184 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
