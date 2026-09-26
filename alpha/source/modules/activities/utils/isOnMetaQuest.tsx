// Module ID: 12573
// Function ID: 12574
// Name: isOnMetaQuest
// Dependencies: [1074, 2]
// Exports: default

// Module 12573 (isOnMetaQuest)
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const ActivityGamePlatforms = Constants.ActivityGamePlatforms;
const result = size.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.META_QUEST;
};
