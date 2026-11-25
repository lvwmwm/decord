// Module ID: 14504
// Function ID: 14505
// Name: isOnConsole
// Dependencies: [14466, 14467, 2]
// Exports: default

// Module 14504 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14466 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14467 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
