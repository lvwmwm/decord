// Module ID: 15787
// Function ID: 15788
// Name: isOnConsole
// Dependencies: [15748, 15749, 2]
// Exports: default

// Module 15787 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 15748 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 15749 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
