// Module ID: 15753
// Function ID: 15754
// Name: isOnConsole
// Dependencies: [15714, 15715, 2]
// Exports: default

// Module 15753 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 15714 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 15715 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
