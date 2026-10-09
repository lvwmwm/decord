// Module ID: 8837
// Function ID: 8838
// Name: isPlayingGameActivity
// Dependencies: [2024, 1085, 7426, 2]
// Exports: default

// Module 8837 (isPlayingGameActivity)
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 2024 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7426 */;
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
