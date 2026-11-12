// Module ID: 15615
// Function ID: 15616
// Name: isOnMetaQuest
// Dependencies: [7406, 2]
// Exports: default

// Module 15615 (isOnMetaQuest)
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
