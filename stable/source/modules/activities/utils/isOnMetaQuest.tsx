// Module ID: 14335
// Function ID: 14336
// Name: isOnMetaQuest
// Dependencies: [1087, 2]
// Exports: default

// Module 14335 (isOnMetaQuest)
import Constants from "Constants" /* 1087 */;
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
