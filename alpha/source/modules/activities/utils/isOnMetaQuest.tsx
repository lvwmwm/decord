// Module ID: 14740
// Function ID: 14741
// Name: isOnMetaQuest
// Dependencies: [7635, 2]
// Exports: default

// Module 14740 (isOnMetaQuest)
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 7635 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.ActivityGamePlatforms.META_QUEST;
};
