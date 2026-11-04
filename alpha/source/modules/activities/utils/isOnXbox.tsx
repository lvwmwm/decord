// Module ID: 15064
// Function ID: 15065
// Name: isOnXbox
// Dependencies: [2147, 9888, 2]
// Exports: default

// Module 15064 (isOnXbox)
import Constants from "Constants" /* 2147 */;
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 9888 */;
import size from "module_2" /* 2 */;

let closure_2 = Constants.XBOX_ACTIVITY_APPLICATION_ID;
const result = size.fileFinishedImporting("modules/activities/utils/isOnXbox.tsx");

export default function isOnXbox(application_id) {
  application_id = undefined;
  if (application_id != null) {
    application_id = application_id.application_id;
  }
  let tmp2 = application_id === closure_2;
  if (!tmp2) {
    let platform;
    if (application_id != null) {
      platform = application_id.platform;
    }
    tmp2 = platform === ActivityGamePlatforms.ActivityGamePlatforms.XBOX;
  }
  return tmp2;
};
