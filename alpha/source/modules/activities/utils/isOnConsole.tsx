// Module ID: 14143
// Function ID: 14144
// Name: isOnConsole
// Dependencies: [14108, 14109, 2]
// Exports: default

// Module 14143 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14108 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14109 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
