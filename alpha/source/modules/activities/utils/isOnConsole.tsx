// Module ID: 14763
// Function ID: 14764
// Name: isOnConsole
// Dependencies: [14725, 14726, 2]
// Exports: default

// Module 14763 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14725 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14726 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
