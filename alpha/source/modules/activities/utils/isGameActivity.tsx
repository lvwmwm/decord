// Module ID: 10933
// Function ID: 10934
// Name: isGameActivity
// Dependencies: [5896, 2]
// Exports: default

// Module 10933 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 5896 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  const tmp = null != type && type.type === ActivityTypes.ActivityTypes.PLAYING;
  return tmp;
};
