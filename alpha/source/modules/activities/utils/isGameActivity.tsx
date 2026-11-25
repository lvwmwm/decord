// Module ID: 11326
// Function ID: 11327
// Name: isGameActivity
// Dependencies: [5984, 2]
// Exports: default

// Module 11326 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 5984 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  const tmp = null != type && type.type === ActivityTypes.ActivityTypes.PLAYING;
  return tmp;
};
