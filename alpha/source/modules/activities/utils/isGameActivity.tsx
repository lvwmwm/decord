// Module ID: 14140
// Function ID: 14141
// Name: isGameActivity
// Dependencies: [6066, 2]
// Exports: default

// Module 14140 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 6066 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  const tmp = null != type && type.type === ActivityTypes.ActivityTypes.PLAYING;
  return tmp;
};
