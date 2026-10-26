// Module ID: 14322
// Function ID: 14323
// Name: isOnConsole
// Dependencies: [14287, 14288, 2]
// Exports: default

// Module 14322 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14287 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14288 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
