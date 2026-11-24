// Module ID: 13516
// Function ID: 13517
// Name: isGameActivity
// Dependencies: [5652, 2]
// Exports: default

// Module 13516 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 5652 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  const tmp = null != type && type.type === ActivityTypes.ActivityTypes.PLAYING;
  return tmp;
};
