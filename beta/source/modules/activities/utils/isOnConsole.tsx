// Module ID: 15128
// Function ID: 15129
// Name: isOnConsole
// Dependencies: [15087, 15088, 2]
// Exports: default

// Module 15128 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 15087 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 15088 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
