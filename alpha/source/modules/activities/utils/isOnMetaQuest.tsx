// Module ID: 14383
// Function ID: 14384
// Name: isOnMetaQuest
// Dependencies: [6955, 2]
// Exports: default

// Module 14383 (isOnMetaQuest)
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 6955 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.ActivityGamePlatforms.META_QUEST;
};
