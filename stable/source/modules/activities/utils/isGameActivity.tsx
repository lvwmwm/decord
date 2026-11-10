// Module ID: 10755
// Function ID: 10756
// Name: isGameActivity
// Dependencies: [5762, 2]
// Exports: default

// Module 10755 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 5762 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  const tmp = null != type && type.type === ActivityTypes.ActivityTypes.PLAYING;
  return tmp;
};
