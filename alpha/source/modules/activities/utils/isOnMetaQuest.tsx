// Module ID: 14396
// Function ID: 14397
// Name: isOnMetaQuest
// Dependencies: [6985, 2]
// Exports: default

// Module 14396 (isOnMetaQuest)
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 6985 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.ActivityGamePlatforms.META_QUEST;
};
