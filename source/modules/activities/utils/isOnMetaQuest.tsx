// Module ID: 11927
// Function ID: 92261
// Name: isOnMetaQuest
// Dependencies: []
// Exports: default

// Module 11927 (isOnMetaQuest)
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
