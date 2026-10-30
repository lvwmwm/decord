// Module ID: 10735
// Function ID: 10736
// Name: isGameActivity
// Dependencies: [5757, 2]
// Exports: default

// Module 10735 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 5757 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  const tmp = null != type && type.type === ActivityTypes.ActivityTypes.PLAYING;
  return tmp;
};
