// Module ID: 15981
// Function ID: 15982
// Name: getApplicationIdForActivity
// Dependencies: [15448, 15982, 15983, 2142, 10913, 8938, 15119, 2]
// Exports: default

// Module 15981 (getApplicationIdForActivity)
import Constants from "Constants" /* 2142 */;
import isStreamingDefault from "isStreaming" /* 8938 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10913 */;
import isOnXboxDefault from "isOnXbox" /* 15119 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 15448 */;
import TwitchApplicationRecord from "TwitchApplicationRecord" /* 15982 */;
import XboxApplicationRecord from "XboxApplicationRecord" /* 15983 */;
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
