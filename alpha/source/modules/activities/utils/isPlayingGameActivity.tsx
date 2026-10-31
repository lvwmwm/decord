// Module ID: 9292
// Function ID: 9293
// Name: isPlayingGameActivity
// Dependencies: [2018, 5762, 7883, 2]
// Exports: default

// Module 9292 (isPlayingGameActivity)
import Constants from "Constants" /* 2018 */;
import ActivityTypes from "ActivityTypes" /* 5762 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7883 */;
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
