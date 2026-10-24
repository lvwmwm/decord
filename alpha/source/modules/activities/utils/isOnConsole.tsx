// Module ID: 14318
// Function ID: 14319
// Name: isOnConsole
// Dependencies: [14283, 14284, 2]
// Exports: default

// Module 14318 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14283 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14284 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
