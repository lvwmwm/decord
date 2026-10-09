// Module ID: 13110
// Function ID: 13111
// Name: isOnConsole
// Dependencies: [13073, 13074, 2]
// Exports: default

// Module 13110 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13073 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13074 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
