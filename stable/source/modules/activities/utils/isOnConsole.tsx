// Module ID: 13167
// Function ID: 13168
// Name: isOnConsole
// Dependencies: [13130, 13131, 2]
// Exports: default

// Module 13167 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13130 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
