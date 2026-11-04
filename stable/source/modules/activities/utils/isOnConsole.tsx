// Module ID: 14355
// Function ID: 14356
// Name: isOnConsole
// Dependencies: [14320, 14321, 2]
// Exports: default

// Module 14355 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14320 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14321 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
