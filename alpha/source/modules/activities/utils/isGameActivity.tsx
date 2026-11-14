// Module ID: 10854
// Function ID: 10855
// Name: isGameActivity
// Dependencies: [6069, 2]
// Exports: default

// Module 10854 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 6069 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  const tmp = null != type && type.type === ActivityTypes.ActivityTypes.PLAYING;
  return tmp;
};
