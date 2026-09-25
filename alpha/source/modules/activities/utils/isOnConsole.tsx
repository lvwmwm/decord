// Module ID: 12576
// Function ID: 12577
// Name: isOnConsole
// Dependencies: [12541, 12542, 2]
// Exports: default

// Module 12576 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 12541 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 12542 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
