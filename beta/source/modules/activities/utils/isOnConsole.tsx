// Module ID: 12613
// Function ID: 12614
// Name: isOnConsole
// Dependencies: [12578, 12579, 2]
// Exports: default

// Module 12613 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 12578 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 12579 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
