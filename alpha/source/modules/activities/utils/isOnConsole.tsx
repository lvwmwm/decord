// Module ID: 14125
// Function ID: 14126
// Name: isOnConsole
// Dependencies: [14090, 14091, 2]
// Exports: default

// Module 14125 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14090 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14091 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
