// Module ID: 14052
// Function ID: 14053
// Name: isOnXbox
// Dependencies: [2026, 1087, 2]
// Exports: default

// Module 14052 (isOnXbox)
import Constants from "Constants" /* 1087 */;
import Constants2 from "Constants" /* 2026 */;
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
