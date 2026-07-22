// Module ID: 10550
// Function ID: 82445
// Name: isWatchTogetherApplication
// Dependencies: []
// Exports: default

// Module 10550 (isWatchTogetherApplication)
const _module = require(dependencyMap[0]);
({ WATCH_YOUTUBE_DEV_APP_ID: closure_0, WATCH_YOUTUBE_PROD_APP_ID: closure_1, WATCH_YOUTUBE_QA_APP_ID: closure_2 } = _module);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/activities/utils/isWatchTogetherApplication.tsx");

export default function isWatchTogetherApplication(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    const items = [closure_0, closure_2, closure_1];
    hasItem = items.includes(arg0);
  }
  return hasItem;
};
