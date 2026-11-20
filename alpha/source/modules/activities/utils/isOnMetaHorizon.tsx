// Module ID: 14352
// Function ID: 14353
// Name: isOnMetaHorizon
// Dependencies: [2143, 6954, 2]
// Exports: default

// Module 14352 (isOnMetaHorizon)
import Constants from "Constants" /* 2143 */;
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 6954 */;
import size from "module_2" /* 2 */;

let closure_2 = Constants.META_PRESENCE_APPLICATION_ID;
const result = size.fileFinishedImporting("modules/activities/utils/isOnMetaHorizon.tsx");

export default function isOnMetaHorizon(application_id) {
  application_id = undefined;
  if (application_id != null) {
    application_id = application_id.application_id;
  }
  let tmp2 = application_id === closure_2;
  if (tmp2) {
    let platform;
    if (application_id != null) {
      platform = application_id.platform;
    }
    let tmp6 = platform === ActivityGamePlatforms.ActivityGamePlatforms.ANDROID;
    const tmp4 = require;
    if (!tmp6) {
      let platform1;
      if (application_id != null) {
        platform1 = application_id.platform;
      }
      tmp6 = platform1 === tmp4(6954).ActivityGamePlatforms.IOS;
    }
    tmp2 = tmp6;
  }
  return tmp2;
};
