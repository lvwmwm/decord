// Module ID: 12820
// Function ID: 12821
// Name: isOnConsole
// Dependencies: [12785, 12786, 2]
// Exports: default

// Module 12820 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 12785 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 12786 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
