// Module ID: 9376
// Function ID: 9377
// Name: isOnMetaQuest
// Dependencies: [676, 2]
// Exports: default

// Module 9376 (isOnMetaQuest)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

const ActivityGamePlatforms = ME.ActivityGamePlatforms;
const result = set.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.META_QUEST;
};
