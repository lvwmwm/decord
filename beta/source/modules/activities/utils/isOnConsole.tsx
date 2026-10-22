// Module ID: 14087
// Function ID: 14088
// Name: isOnConsole
// Dependencies: [14052, 14053, 2]
// Exports: default

// Module 14087 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14052 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14053 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
