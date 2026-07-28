// Module ID: 11986
// Function ID: 92544
// Name: isOnMetaQuest
// Dependencies: [653, 2]
// Exports: default

// Module 11986 (isOnMetaQuest)
import { ActivityGamePlatforms } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (null != platform) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.META_QUEST;
};
