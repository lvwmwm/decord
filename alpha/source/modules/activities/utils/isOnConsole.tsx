// Module ID: 12811
// Function ID: 12812
// Name: isOnConsole
// Dependencies: [12776, 12777, 2]
// Exports: default

// Module 12811 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 12776 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 12777 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
