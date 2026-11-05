// Module ID: 9444
// Function ID: 9445
// Name: isPlayingGameActivity
// Dependencies: [2147, 5899, 8028, 2]
// Exports: default

// Module 9444 (isPlayingGameActivity)
import Constants from "Constants" /* 2147 */;
import ActivityTypes from "ActivityTypes" /* 5899 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 8028 */;
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
