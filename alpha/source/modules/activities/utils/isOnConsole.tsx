// Module ID: 15104
// Function ID: 15105
// Name: isOnConsole
// Dependencies: [15063, 15064, 2]
// Exports: default

// Module 15104 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 15063 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 15064 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
