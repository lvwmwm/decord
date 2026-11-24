// Module ID: 8576
// Function ID: 8577
// Name: isPlayingGameActivity
// Dependencies: [2144, 5889, 8259, 2]
// Exports: default

// Module 8576 (isPlayingGameActivity)
import Constants from "Constants" /* 2144 */;
import ActivityTypes from "ActivityTypes" /* 5889 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 8259 */;
import size from "module_2" /* 2 */;

let closure_3 = Constants.XBOX_ACTIVITY_APPLICATION_ID;
const result = size.fileFinishedImporting("modules/activities/utils/isPlayingGameActivity.tsx");

export default function isPlayingGameActivity(application_id) {
  let tmp = null != application_id;
  if (tmp) {
    tmp = null != application_id.application_id && application_id.type === ActivityTypes.ActivityTypes.PLAYING && !isEmbeddedActivityDefault(application_id) && application_id.application_id !== closure_3;
    const tmp2 = null != application_id.application_id && application_id.type === ActivityTypes.ActivityTypes.PLAYING && !isEmbeddedActivityDefault(application_id) && application_id.application_id !== closure_3;
  }
  return tmp;
};
