// Module ID: 10874
// Function ID: 10875
// Name: isGameActivity
// Dependencies: [5891, 2]
// Exports: default

// Module 10874 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 5891 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  const tmp = null != type && type.type === ActivityTypes.ActivityTypes.PLAYING;
  return tmp;
};
