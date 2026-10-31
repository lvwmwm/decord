// Module ID: 14889
// Function ID: 14890
// Name: isOnConsole
// Dependencies: [14848, 14849, 2]
// Exports: default

// Module 14889 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14848 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14849 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
