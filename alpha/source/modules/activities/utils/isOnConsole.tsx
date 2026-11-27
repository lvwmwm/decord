// Module ID: 14945
// Function ID: 14946
// Name: isOnConsole
// Dependencies: [14907, 14908, 2]
// Exports: default

// Module 14945 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14907 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14908 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
