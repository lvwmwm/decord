// Module ID: 12940
// Function ID: 12941
// Name: getApplicationIdForActivity
// Dependencies: [12547, 12941, 12942, 4327, 9589, 8242, 12208, 2]
// Exports: default

// Module 12940 (getApplicationIdForActivity)
import { SpotifyApplication } from "getIconURL";
import { TWITCH_APPLICATION_ID_PREFIX as closure_3 } from "getIconURL";
import { XBOX_APPLICATION_ID_PREFIX as closure_4 } from "getIconURL";
import { XBOX_ACTIVITY_APPLICATION_ID as closure_5 } from "items3";

const result = require("getIconURL").fileFinishedImporting("modules/now_playing/getApplicationIdForActivity.tsx");

export default function getApplicationIdForActivity(party) {
  if (importDefault(9589)(party)) {
    if (null != party.party) {
      if (null != party.party.id) {
        let id = SpotifyApplication.id;
      }
      return id;
    }
  }
  if (importDefault(8242)(party)) {
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
  if (importDefault(12208)(party)) {
    id = closure_4 + party.name;
  }
};
