// Module ID: 13330
// Function ID: 13331
// Name: isOnConsole
// Dependencies: [13295, 13296, 2]
// Exports: default

// Module 13330 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13295 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13296 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
