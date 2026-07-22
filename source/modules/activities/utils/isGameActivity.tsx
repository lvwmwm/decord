// Module ID: 9066
// Function ID: 71153
// Name: isGameActivity
// Dependencies: []
// Exports: default

// Module 9066 (isGameActivity)
const ActivityTypes = require(dependencyMap[0]).ActivityTypes;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === ActivityTypes.PLAYING;
  }
  return tmp;
};
