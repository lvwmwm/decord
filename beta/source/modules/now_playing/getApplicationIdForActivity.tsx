// Module ID: 15027
// Function ID: 15028
// Name: getApplicationIdForActivity
// Dependencies: [14324, 15028, 15029, 2144, 13521, 8215, 14456, 2]
// Exports: default

// Module 15027 (getApplicationIdForActivity)
import Constants from "Constants" /* 2144 */;
import isStreamingDefault from "isStreaming" /* 8215 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 13521 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 14324 */;
import isOnXboxDefault from "isOnXbox" /* 14456 */;
import TwitchApplicationRecord from "TwitchApplicationRecord" /* 15028 */;
import XboxApplicationRecord from "XboxApplicationRecord" /* 15029 */;
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
