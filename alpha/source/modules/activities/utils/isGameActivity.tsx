// Module ID: 11373
// Function ID: 11374
// Name: isGameActivity
// Dependencies: [6015, 2]
// Exports: default

// Module 11373 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 6015 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  const tmp = null != type && type.type === ActivityTypes.ActivityTypes.PLAYING;
  return tmp;
};
