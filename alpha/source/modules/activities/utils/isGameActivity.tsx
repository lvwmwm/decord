// Module ID: 10883
// Function ID: 10884
// Name: isGameActivity
// Dependencies: [5893, 2]
// Exports: default

// Module 10883 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 5893 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  const tmp = null != type && type.type === ActivityTypes.ActivityTypes.PLAYING;
  return tmp;
};
