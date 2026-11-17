// Module ID: 15763
// Function ID: 15764
// Name: isOnMetaQuest
// Dependencies: [7482, 2]
// Exports: default

// Module 15763 (isOnMetaQuest)
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 7482 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.ActivityGamePlatforms.META_QUEST;
};
