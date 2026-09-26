// Module ID: 12593
// Function ID: 12594
// Name: isOnConsole
// Dependencies: [12558, 12559, 2]
// Exports: default

// Module 12593 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 12558 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 12559 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
