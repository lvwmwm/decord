// Module ID: 14294
// Function ID: 14295
// Name: isOnConsole
// Dependencies: [14259, 14260, 2]
// Exports: default

// Module 14294 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14259 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14260 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
