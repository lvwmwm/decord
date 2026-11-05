// Module ID: 15092
// Function ID: 15093
// Name: isOnMetaQuest
// Dependencies: [9894, 2]
// Exports: default

// Module 15092 (isOnMetaQuest)
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 9894 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.ActivityGamePlatforms.META_QUEST;
};
