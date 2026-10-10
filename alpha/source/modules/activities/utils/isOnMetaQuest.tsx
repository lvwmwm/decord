// Module ID: 13137
// Function ID: 13138
// Name: isOnMetaQuest
// Dependencies: [1085, 2]
// Exports: default

// Module 13137 (isOnMetaQuest)
import Constants from "Constants" /* 1085 */;
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
