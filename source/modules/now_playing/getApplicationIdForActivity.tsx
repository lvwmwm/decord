// Module ID: 12801
// Function ID: 12802
// Name: getApplicationIdForActivity
// Dependencies: [12372, 12802, 12803, 4214, 9079, 7978, 11993, 2]
// Exports: default

// Module 12801 (getApplicationIdForActivity)
import { SpotifyApplication } from "getIconURL";
import { TWITCH_APPLICATION_ID_PREFIX as closure_3 } from "getIconURL";
import { XBOX_APPLICATION_ID_PREFIX as closure_4 } from "getIconURL";
import { XBOX_ACTIVITY_APPLICATION_ID as closure_5 } from "items3";

const result = require("getIconURL").fileFinishedImporting("modules/now_playing/getApplicationIdForActivity.tsx");

export default function getApplicationIdForActivity(party) {
  if (importDefault(9079)(party)) {
    if (null != party.party) {
      if (null != party.party.id) {
        let id = SpotifyApplication.id;
      }
      return id;
    }
  }
  if (importDefault(7978)(party)) {
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
  if (importDefault(11993)(party)) {
    id = closure_4 + party.name;
  }
};
