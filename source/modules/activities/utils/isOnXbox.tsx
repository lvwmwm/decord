// Module ID: 11922
// Function ID: 92274
// Name: isOnXbox
// Dependencies: [4155, 653, 2]
// Exports: default

// Module 11922 (isOnXbox)
import { XBOX_ACTIVITY_APPLICATION_ID as closure_0 } from "items3";
import { ActivityGamePlatforms } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isOnXbox.tsx");

export default function isOnXbox(application_id) {
  application_id = undefined;
  if (null != application_id) {
    application_id = application_id.application_id;
  }
  let tmp2 = application_id === closure_0;
  if (!tmp2) {
    let platform;
    if (null != application_id) {
      platform = application_id.platform;
    }
    tmp2 = platform === ActivityGamePlatforms.XBOX;
  }
  return tmp2;
};
