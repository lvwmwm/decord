// Module ID: 12468
// Function ID: 12469
// Name: isOnConsole
// Dependencies: [9387, 9388, 2]
// Exports: default

// Module 12468 (isOnConsole)
import set from "set" /* 2 */;
import isOnXboxDefault from "isOnXbox" /* 9387 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 9388 */;

const result = set.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
