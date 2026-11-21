// Module ID: 14473
// Function ID: 14474
// Name: isOnMetaQuest
// Dependencies: [7074, 2]
// Exports: default

// Module 14473 (isOnMetaQuest)
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 7074 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.ActivityGamePlatforms.META_QUEST;
};
