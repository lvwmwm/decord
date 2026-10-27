// Module ID: 14359
// Function ID: 14360
// Name: isOnConsole
// Dependencies: [14318, 14319, 2]
// Exports: default

// Module 14359 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14318 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14319 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
