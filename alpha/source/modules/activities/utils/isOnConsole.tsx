// Module ID: 15095
// Function ID: 15096
// Name: isOnConsole
// Dependencies: [15054, 15055, 2]
// Exports: default

// Module 15095 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 15054 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 15055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
