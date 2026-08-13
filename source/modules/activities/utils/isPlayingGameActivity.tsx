// Module ID: 9290
// Function ID: 9291
// Name: isPlayingGameActivity
// Dependencies: [4370, 676, 7244, 2]
// Exports: default

// Module 9290 (isPlayingGameActivity)
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
      tmp2 = !importDefault(7244)(application_id);
    }
    if (tmp2) {
      tmp2 = application_id.application_id !== closure_2;
    }
    tmp = tmp2;
  }
  return tmp;
};
