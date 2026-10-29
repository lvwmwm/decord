// Module ID: 14816
// Function ID: 14817
// Name: isOnConsole
// Dependencies: [14775, 14776, 2]
// Exports: default

// Module 14816 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14775 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14776 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};
