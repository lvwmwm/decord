// Module ID: 12781
// Function ID: 12782
// Name: isOnConsole
// Dependencies: [12746, 12747, 2]
// Exports: default

// Module 12781 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 12746 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 12747 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
