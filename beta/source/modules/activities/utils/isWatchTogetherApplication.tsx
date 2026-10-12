// Module ID: 10880
// Function ID: 10881
// Name: isWatchTogetherApplication
// Dependencies: [2024, 2]
// Exports: default

// Module 10880 (isWatchTogetherApplication)
import Constants from "Constants" /* 2024 */;
import size from "module_2" /* 2 */;

let _window;
let c2;
let map;
({ WATCH_YOUTUBE_DEV_APP_ID: _window, WATCH_YOUTUBE_PROD_APP_ID: map, WATCH_YOUTUBE_QA_APP_ID: c2 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/isWatchTogetherApplication.tsx");

export default function isWatchTogetherApplication(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    const items = [React, React2, map];
    hasItem = items.includes(arg0);
  }
  return hasItem;
};
