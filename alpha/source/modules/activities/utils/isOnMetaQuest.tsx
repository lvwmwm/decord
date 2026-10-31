// Module ID: 14863
// Function ID: 14864
// Name: isOnMetaQuest
// Dependencies: [9738, 2]
// Exports: default

// Module 14863 (isOnMetaQuest)
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 9738 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.ActivityGamePlatforms.META_QUEST;
};
