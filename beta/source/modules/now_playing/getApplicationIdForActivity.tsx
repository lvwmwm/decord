// Module ID: 15091
// Function ID: 15092
// Name: getApplicationIdForActivity
// Dependencies: [14587, 15092, 15093, 2026, 10683, 8781, 14320, 2]
// Exports: default

// Module 15091 (getApplicationIdForActivity)
import Constants from "Constants" /* 2026 */;
import isStreamingDefault from "isStreaming" /* 8781 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10683 */;
import isOnXboxDefault from "isOnXbox" /* 14320 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 14587 */;
import TwitchApplicationRecord from "TwitchApplicationRecord" /* 15092 */;
import XboxApplicationRecord from "XboxApplicationRecord" /* 15093 */;
import size from "module_2" /* 2 */;

const SpotifyApplication = SpotifyApplicationRecord.SpotifyApplication;
let closure_3 = TwitchApplicationRecord.TWITCH_APPLICATION_ID_PREFIX;
let closure_4 = XboxApplicationRecord.XBOX_APPLICATION_ID_PREFIX;
let closure_5 = Constants.XBOX_ACTIVITY_APPLICATION_ID;
const result = size.fileFinishedImporting("modules/now_playing/getApplicationIdForActivity.tsx");

export default function getApplicationIdForActivity(party) {
  let id;
  if (isListeningOnSpotifyDefault(party)) {
    if (null != party.party) {
      if (null != party.party.id) {
        id = SpotifyApplication.id;
      }
      return id;
    }
  }
  if (isStreamingDefault(party)) {
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
