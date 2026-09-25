// Module ID: 10334
// Function ID: 10335
// Name: isGameActivity
// Dependencies: [1074, 2]
// Exports: default

// Module 10334 (isGameActivity)
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const ActivityTypes = Constants.ActivityTypes;
const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === ActivityTypes.PLAYING;
  }
  return tmp;
};
