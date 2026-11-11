// Module ID: 15618
// Function ID: 15619
// Name: isOnMetaQuest
// Dependencies: [7406, 2]
// Exports: default

// Module 15618 (isOnMetaQuest)
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 7406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.ActivityGamePlatforms.META_QUEST;
};
