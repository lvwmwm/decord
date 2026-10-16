// Module ID: 14010
// Function ID: 14011
// Name: isOnConsole
// Dependencies: [13975, 13976, 2]
// Exports: default

// Module 14010 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13975 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13976 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
