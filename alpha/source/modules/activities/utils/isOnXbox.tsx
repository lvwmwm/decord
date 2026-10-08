// Module ID: 12991
// Function ID: 12992
// Name: isOnXbox
// Dependencies: [2023, 1085, 2]
// Exports: default

// Module 12991 (isOnXbox)
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 2023 */;
import size from "module_2" /* 2 */;

let closure_0 = Constants2.XBOX_ACTIVITY_APPLICATION_ID;
const ActivityGamePlatforms = Constants.ActivityGamePlatforms;
const result = size.fileFinishedImporting("modules/activities/utils/isOnXbox.tsx");

export default function isOnXbox(application_id) {
  application_id = undefined;
  if (application_id != null) {
    application_id = application_id.application_id;
  }
  let tmp2 = application_id === closure_0;
  if (!tmp2) {
    let platform;
    if (application_id != null) {
      platform = application_id.platform;
    }
    tmp2 = platform === ActivityGamePlatforms.XBOX;
  }
  return tmp2;
};
