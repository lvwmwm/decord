// Module ID: 14915
// Function ID: 14916
// Name: isOnMetaQuest
// Dependencies: [7768, 2]
// Exports: default

// Module 14915 (isOnMetaQuest)
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
