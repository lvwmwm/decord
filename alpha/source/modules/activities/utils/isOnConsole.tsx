// Module ID: 14496
// Function ID: 14497
// Name: isOnConsole
// Dependencies: [14458, 14459, 2]
// Exports: default

// Module 14496 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14458 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14459 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
