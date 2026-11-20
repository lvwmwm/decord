// Module ID: 14351
// Function ID: 14352
// Name: isOnMetaQuest
// Dependencies: [6954, 2]
// Exports: default

// Module 14351 (isOnMetaQuest)
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 6954 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.ActivityGamePlatforms.META_QUEST;
};
