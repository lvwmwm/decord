// Module ID: 14323
// Function ID: 14324
// Name: isOnConsole
// Dependencies: [14288, 14289, 2]
// Exports: default

// Module 14323 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14288 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14289 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
