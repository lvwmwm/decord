// Module ID: 11909
// Function ID: 92195
// Name: isOnXbox
// Dependencies: [1392, 3801, 2]
// Exports: default

// Module 11909 (isOnXbox)
import { XBOX_ACTIVITY_APPLICATION_ID as closure_0 } from "getAvatarURL";
import { ActivityGamePlatforms } from "explicitContentFromProto";
import result2 from "result2";

const result = result2.fileFinishedImporting("modules/activities/utils/isOnXbox.tsx");

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
