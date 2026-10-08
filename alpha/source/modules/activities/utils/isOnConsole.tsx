// Module ID: 13028
// Function ID: 13029
// Name: isOnConsole
// Dependencies: [12991, 12992, 2]
// Exports: default

// Module 13028 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 12991 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 12992 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
