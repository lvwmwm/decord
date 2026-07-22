// Module ID: 11928
// Function ID: 92275
// Name: isOnMetaQuest
// Dependencies: []
// Exports: default

// Module 11928 (isOnMetaQuest)
const ActivityGamePlatforms = require(dependencyMap[0]).ActivityGamePlatforms;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (null != platform) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.META_QUEST;
};
