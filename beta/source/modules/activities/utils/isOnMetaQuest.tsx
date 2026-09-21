// Module ID: 13313
// Function ID: 13314
// Name: isOnMetaQuest
// Dependencies: [1078, 2]
// Exports: default

// Module 13313 (isOnMetaQuest)
import Constants from "Constants" /* 1078 */;
import size from "module_2" /* 2 */;

const ActivityGamePlatforms = Constants.ActivityGamePlatforms;
const result = size.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.META_QUEST;
};
