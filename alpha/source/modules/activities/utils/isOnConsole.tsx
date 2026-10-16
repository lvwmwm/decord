// Module ID: 14020
// Function ID: 14021
// Name: isOnConsole
// Dependencies: [13985, 13986, 2]
// Exports: default

// Module 14020 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13985 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13986 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
