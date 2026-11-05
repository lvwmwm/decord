// Module ID: 10939
// Function ID: 10940
// Name: isGameActivity
// Dependencies: [5899, 2]
// Exports: default

// Module 10939 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 5899 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  const tmp = null != type && type.type === ActivityTypes.ActivityTypes.PLAYING;
  return tmp;
};
