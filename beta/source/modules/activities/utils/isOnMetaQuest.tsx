// Module ID: 15729
// Function ID: 15730
// Name: isOnMetaQuest
// Dependencies: [7472, 2]
// Exports: default

// Module 15729 (isOnMetaQuest)
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 7472 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.ActivityGamePlatforms.META_QUEST;
};
