// Module ID: 12925
// Function ID: 12926
// Name: getApplicationIdForActivity
// Dependencies: [12532, 12926, 12927, 4310, 9573, 8225, 12193, 2]
// Exports: default

// Module 12925 (getApplicationIdForActivity)
import { SpotifyApplication } from "getIconURL";
import { TWITCH_APPLICATION_ID_PREFIX as closure_3 } from "getIconURL";
import { XBOX_APPLICATION_ID_PREFIX as closure_4 } from "getIconURL";
import { XBOX_ACTIVITY_APPLICATION_ID as closure_5 } from "items3";

const result = require("getIconURL").fileFinishedImporting("modules/now_playing/getApplicationIdForActivity.tsx");

export default function getApplicationIdForActivity(party) {
  if (importDefault(9573)(party)) {
    if (null != party.party) {
      if (null != party.party.id) {
        let id = SpotifyApplication.id;
      }
      return id;
    }
  }
  if (importDefault(8225)(party)) {
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
  if (importDefault(12193)(party)) {
    id = closure_4 + party.name;
  }
};
