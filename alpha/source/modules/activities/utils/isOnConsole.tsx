// Module ID: 14885
// Function ID: 14886
// Name: isOnConsole
// Dependencies: [14847, 14848, 2]
// Exports: default

// Module 14885 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14847 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14848 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
