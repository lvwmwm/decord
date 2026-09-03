// Module ID: 9432
// Function ID: 9433
// Name: isOnMetaQuest
// Dependencies: [673, 2]
// Exports: default

// Module 9432 (isOnMetaQuest)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;

const ActivityGamePlatforms = ME.ActivityGamePlatforms;
const result = set.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.META_QUEST;
};
