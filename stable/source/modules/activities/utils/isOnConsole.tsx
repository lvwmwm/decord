// Module ID: 13359
// Function ID: 13360
// Name: isOnConsole
// Dependencies: [13324, 13325, 2]
// Exports: default

// Module 13359 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13324 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13325 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
