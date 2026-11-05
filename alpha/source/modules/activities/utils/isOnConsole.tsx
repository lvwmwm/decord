// Module ID: 15118
// Function ID: 15119
// Name: isOnConsole
// Dependencies: [15077, 15078, 2]
// Exports: default

// Module 15118 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 15077 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 15078 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
