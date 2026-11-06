// Module ID: 10891
// Function ID: 10892
// Name: isGameActivity
// Dependencies: [5918, 2]
// Exports: default

// Module 10891 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 5918 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  const tmp = null != type && type.type === ActivityTypes.ActivityTypes.PLAYING;
  return tmp;
};
