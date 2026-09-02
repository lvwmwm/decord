// Module ID: 13625
// Function ID: 13626
// Name: getApplicationIdForActivity
// Dependencies: [13116, 13626, 13627, 4506, 9269, 8116, 9400, 2]
// Exports: default

// Module 13625 (getApplicationIdForActivity)
import set from "set" /* 2 */;
import items3 from "items3" /* 4506 */;
import _isStreamingDefault from "_isStreaming" /* 8116 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 9269 */;
import isOnXboxDefault from "isOnXbox" /* 9400 */;
import getIconURL from "getIconURL" /* 13116 */;
import getIconURL2 from "getIconURL" /* 13626 */;
import getIconURL3 from "getIconURL" /* 13627 */;

const SpotifyApplication = getIconURL.SpotifyApplication;
let closure_3 = getIconURL2.TWITCH_APPLICATION_ID_PREFIX;
let closure_4 = getIconURL3.XBOX_APPLICATION_ID_PREFIX;
let closure_5 = items3.XBOX_ACTIVITY_APPLICATION_ID;
const result = set.fileFinishedImporting("modules/now_playing/getApplicationIdForActivity.tsx");

export default function getApplicationIdForActivity(party) {
  if (isListeningOnSpotifyDefault(party)) {
    if (null != party.party) {
      if (null != party.party.id) {
        let id = SpotifyApplication.id;
      }
      return id;
    }
  }
  if (_isStreamingDefault(party)) {
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
  if (isOnXboxDefault(party)) {
    id = closure_4 + party.name;
  }
};
