// Module ID: 11226
// Function ID: 11227
// Name: isGameActivity
// Dependencies: [1078, 2]
// Exports: default

// Module 11226 (isGameActivity)
import Constants from "Constants" /* 1078 */;
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
