// Module ID: 12735
// Function ID: 99160
// Name: getApplicationIdForActivity
// Dependencies: [12306, 12736, 12737, 4156, 9011, 7917, 11925, 2]
// Exports: default

// Module 12735 (getApplicationIdForActivity)
import { SpotifyApplication } from "_isNativeReflectConstruct";
import { TWITCH_APPLICATION_ID_PREFIX as closure_3 } from "_isNativeReflectConstruct";
import { XBOX_APPLICATION_ID_PREFIX as closure_4 } from "_isNativeReflectConstruct";
import { XBOX_ACTIVITY_APPLICATION_ID as closure_5 } from "items3";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/now_playing/getApplicationIdForActivity.tsx");

export default function getApplicationIdForActivity(party) {
  if (importDefault(9011)(party)) {
    if (null != party.party) {
      if (null != party.party.id) {
        let id = SpotifyApplication.id;
      }
      return id;
    }
  }
  if (importDefault(7917)(party)) {
    if (null != party.url) {
      id = closure_3 + party.url;
    }
  }
  if (null != party.application_id) {
    if (party.application_id !== closure_5) {
      id = party.application_id;
    }
  }
  id = null;
  if (importDefault(11925)(party)) {
    id = closure_4 + party.name;
  }
};
