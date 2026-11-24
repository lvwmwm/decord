// Module ID: 11227
// Function ID: 11228
// Name: isGameActivity
// Dependencies: [5889, 2]
// Exports: default

// Module 11227 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 5889 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  const tmp = null != type && type.type === ActivityTypes.ActivityTypes.PLAYING;
  return tmp;
};
