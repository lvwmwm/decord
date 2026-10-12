// Module ID: 13162
// Function ID: 13163
// Name: isOnConsole
// Dependencies: [13125, 13126, 2]
// Exports: default

// Module 13162 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13125 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13126 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
