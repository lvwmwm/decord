// Module ID: 11929
// Function ID: 92277
// Name: isOnMetaHorizon
// Dependencies: [1392, 3801, 2]
// Exports: default

// Module 11929 (isOnMetaHorizon)
import { META_PRESENCE_APPLICATION_ID as closure_0 } from "getAvatarURL";
import { ActivityGamePlatforms } from "explicitContentFromProto";
import result2 from "result2";

const result = result2.fileFinishedImporting("modules/activities/utils/isOnMetaHorizon.tsx");

export default function isOnMetaHorizon(application_id) {
  application_id = undefined;
  if (null != application_id) {
    application_id = application_id.application_id;
  }
  let tmp2 = application_id === closure_0;
  if (tmp2) {
    let platform;
    if (null != application_id) {
      platform = application_id.platform;
    }
    let tmp5 = platform === ActivityGamePlatforms.ANDROID;
    if (!tmp5) {
      let platform1;
      if (null != application_id) {
        platform1 = application_id.platform;
      }
      tmp5 = platform1 === ActivityGamePlatforms.IOS;
    }
    tmp2 = tmp5;
  }
  return tmp2;
};
