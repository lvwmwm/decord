// Module ID: 13396
// Function ID: 13397
// Name: isGameActivity
// Dependencies: [5533, 2]
// Exports: default

// Module 13396 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 5533 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  const tmp = null != type && type.type === ActivityTypes.ActivityTypes.PLAYING;
  return tmp;
};
