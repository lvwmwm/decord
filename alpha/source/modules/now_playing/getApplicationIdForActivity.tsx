// Module ID: 14942
// Function ID: 14943
// Name: getApplicationIdForActivity
// Dependencies: [14234, 14943, 14944, 2145, 13431, 8096, 14368, 2]
// Exports: default

// Module 14942 (getApplicationIdForActivity)
import Constants from "Constants" /* 2145 */;
import isStreamingDefault from "isStreaming" /* 8096 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 13431 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 14234 */;
import isOnXboxDefault from "isOnXbox" /* 14368 */;
import TwitchApplicationRecord from "TwitchApplicationRecord" /* 14943 */;
import XboxApplicationRecord from "XboxApplicationRecord" /* 14944 */;
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
