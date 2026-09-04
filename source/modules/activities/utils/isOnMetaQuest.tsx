// Module ID: 12949
// Function ID: 12950
// Name: isOnMetaQuest
// Dependencies: [673, 2]
// Exports: default

// Module 12949 (isOnMetaQuest)
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
