// Module ID: 12969
// Function ID: 12970
// Name: isOnConsole
// Dependencies: [12934, 12935, 2]
// Exports: default

// Module 12969 (isOnConsole)
import set from "set" /* 2 */;
import isOnXboxDefault from "isOnXbox" /* 12934 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 12935 */;

const result = set.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
