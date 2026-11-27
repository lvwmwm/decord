// Module ID: 14922
// Function ID: 14923
// Name: isOnMetaQuest
// Dependencies: [7768, 2]
// Exports: default

// Module 14922 (isOnMetaQuest)
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 7768 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.ActivityGamePlatforms.META_QUEST;
};
