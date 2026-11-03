// Module ID: 14998
// Function ID: 14999
// Name: isOnMetaQuest
// Dependencies: [9870, 2]
// Exports: default

// Module 14998 (isOnMetaQuest)
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 9870 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.ActivityGamePlatforms.META_QUEST;
};
