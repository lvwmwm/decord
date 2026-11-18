// Module ID: 13444
// Function ID: 13445
// Name: isGameActivity
// Dependencies: [5562, 2]
// Exports: default

// Module 13444 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 5562 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  const tmp = null != type && type.type === ActivityTypes.ActivityTypes.PLAYING;
  return tmp;
};
