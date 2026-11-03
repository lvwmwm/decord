// Module ID: 10885
// Function ID: 10886
// Name: isGameActivity
// Dependencies: [5882, 2]
// Exports: default

// Module 10885 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 5882 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  const tmp = null != type && type.type === ActivityTypes.ActivityTypes.PLAYING;
  return tmp;
};
