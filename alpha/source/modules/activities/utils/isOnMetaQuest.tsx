// Module ID: 14790
// Function ID: 14791
// Name: isOnMetaQuest
// Dependencies: [1084, 2]
// Exports: default

// Module 14790 (isOnMetaQuest)
import Constants from "Constants" /* 1084 */;
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
