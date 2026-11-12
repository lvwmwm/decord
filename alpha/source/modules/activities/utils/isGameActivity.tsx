// Module ID: 10785
// Function ID: 10786
// Name: isGameActivity
// Dependencies: [6006, 2]
// Exports: default

// Module 10785 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 6006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  const tmp = null != type && type.type === ActivityTypes.ActivityTypes.PLAYING;
  return tmp;
};
