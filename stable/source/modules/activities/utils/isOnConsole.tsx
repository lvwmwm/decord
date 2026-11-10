// Module ID: 14893
// Function ID: 14894
// Name: isOnConsole
// Dependencies: [14852, 14853, 2]
// Exports: default

// Module 14893 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14852 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14853 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
