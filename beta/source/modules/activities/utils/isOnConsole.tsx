// Module ID: 14092
// Function ID: 14093
// Name: isOnConsole
// Dependencies: [14057, 14058, 2]
// Exports: default

// Module 14092 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14057 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14058 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
