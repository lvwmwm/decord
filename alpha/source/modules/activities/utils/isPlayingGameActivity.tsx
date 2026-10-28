// Module ID: 9256
// Function ID: 9257
// Name: isPlayingGameActivity
// Dependencies: [2023, 1084, 7847, 2]
// Exports: default

// Module 9256 (isPlayingGameActivity)
import Constants from "Constants" /* 1084 */;
import Constants2 from "Constants" /* 2023 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7847 */;
import size from "module_2" /* 2 */;

let closure_2 = Constants2.XBOX_ACTIVITY_APPLICATION_ID;
const ActivityTypes = Constants.ActivityTypes;
const result = size.fileFinishedImporting("modules/activities/utils/isPlayingGameActivity.tsx");

export default function isPlayingGameActivity(application_id) {
  let tmp = null != application_id;
  if (tmp) {
    tmp = null != application_id.application_id && application_id.type === ActivityTypes.PLAYING && !isEmbeddedActivityDefault(application_id) && application_id.application_id !== closure_2;
    const tmp2 = null != application_id.application_id && application_id.type === ActivityTypes.PLAYING && !isEmbeddedActivityDefault(application_id) && application_id.application_id !== closure_2;
  }
  return tmp;
};
