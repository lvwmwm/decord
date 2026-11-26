// Module ID: 14938
// Function ID: 14939
// Name: isOnConsole
// Dependencies: [14900, 14901, 2]
// Exports: default

// Module 14938 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14900 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14901 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
