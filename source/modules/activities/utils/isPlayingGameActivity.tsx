// Module ID: 9733
// Function ID: 9734
// Name: isPlayingGameActivity
// Dependencies: [4481, 676, 7259, 2]
// Exports: default

// Module 9733 (isPlayingGameActivity)
import { XBOX_ACTIVITY_APPLICATION_ID as closure_2 } from "items3";
import { ActivityTypes } from "ME";

const result = require("isEmbeddedActivity").fileFinishedImporting("modules/activities/utils/isPlayingGameActivity.tsx");

export default function isPlayingGameActivity(application_id) {
  let tmp = null != application_id;
  if (tmp) {
    let tmp2 = null != application_id.application_id;
    if (tmp2) {
      tmp2 = application_id.type === ActivityTypes.PLAYING;
    }
    if (tmp2) {
      tmp2 = !importDefault(7259)(application_id);
    }
    if (tmp2) {
      tmp2 = application_id.application_id !== closure_2;
    }
    tmp = tmp2;
  }
  return tmp;
};
