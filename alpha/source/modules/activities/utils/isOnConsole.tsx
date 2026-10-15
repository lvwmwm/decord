// Module ID: 13978
// Function ID: 13979
// Name: isOnConsole
// Dependencies: [13943, 13944, 2]
// Exports: default

// Module 13978 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13943 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13944 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
