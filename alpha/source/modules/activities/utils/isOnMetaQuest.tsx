// Module ID: 15079
// Function ID: 15080
// Name: isOnMetaQuest
// Dependencies: [9888, 2]
// Exports: default

// Module 15079 (isOnMetaQuest)
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 9888 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.ActivityGamePlatforms.META_QUEST;
};
