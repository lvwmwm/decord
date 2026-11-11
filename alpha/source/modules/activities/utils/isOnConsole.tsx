// Module ID: 15642
// Function ID: 15643
// Name: isOnConsole
// Dependencies: [15603, 15604, 2]
// Exports: default

// Module 15642 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 15603 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 15604 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
