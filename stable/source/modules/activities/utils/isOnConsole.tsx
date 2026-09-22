// Module ID: 13171
// Function ID: 13172
// Name: isOnConsole
// Dependencies: [13136, 13137, 2]
// Exports: default

// Module 13171 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13136 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13137 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
