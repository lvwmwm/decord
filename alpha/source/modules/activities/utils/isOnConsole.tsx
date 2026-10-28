// Module ID: 14582
// Function ID: 14583
// Name: isOnConsole
// Dependencies: [14541, 14542, 2]
// Exports: default

// Module 14582 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14541 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14542 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
