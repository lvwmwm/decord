// Module ID: 15119
// Function ID: 15120
// Name: isOnXbox
// Dependencies: [2142, 9861, 2]
// Exports: default

// Module 15119 (isOnXbox)
import Constants from "Constants" /* 2142 */;
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 9861 */;
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
