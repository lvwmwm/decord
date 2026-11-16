// Module ID: 10906
// Function ID: 10907
// Name: isGameActivity
// Dependencies: [5923, 2]
// Exports: default

// Module 10906 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 5923 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  const tmp = null != type && type.type === ActivityTypes.ActivityTypes.PLAYING;
  return tmp;
};
