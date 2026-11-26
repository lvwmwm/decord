// Module ID: 16254
// Function ID: 16255
// Name: getApplicationIdForActivity
// Dependencies: [15592, 16255, 16256, 2145, 10860, 8625, 15716, 2]
// Exports: default

// Module 16254 (getApplicationIdForActivity)
import Constants from "Constants" /* 2145 */;
import isStreamingDefault from "isStreaming" /* 8625 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10860 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 15592 */;
import isOnXboxDefault from "isOnXbox" /* 15716 */;
import TwitchApplicationRecord from "TwitchApplicationRecord" /* 16255 */;
import XboxApplicationRecord from "XboxApplicationRecord" /* 16256 */;
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
