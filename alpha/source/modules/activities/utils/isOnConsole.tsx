// Module ID: 15105
// Function ID: 15106
// Name: isOnConsole
// Dependencies: [15064, 15065, 2]
// Exports: default

// Module 15105 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 15064 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 15065 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
