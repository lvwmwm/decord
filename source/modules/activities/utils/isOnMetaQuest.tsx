// Module ID: 12210
// Function ID: 12211
// Name: isOnMetaQuest
// Dependencies: [676, 2]
// Exports: default

// Module 12210 (isOnMetaQuest)
import { ActivityGamePlatforms } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.META_QUEST;
};
