// Module ID: 12593
// Function ID: 12594
// Name: isOnMetaQuest
// Dependencies: [1086, 2]
// Exports: default

// Module 12593 (isOnMetaQuest)
import Constants from "Constants" /* 1086 */;
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
