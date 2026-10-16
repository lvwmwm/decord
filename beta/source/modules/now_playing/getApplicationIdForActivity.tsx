// Module ID: 14043
// Function ID: 14044
// Name: getApplicationIdForActivity
// Dependencies: [13540, 14044, 14045, 2024, 10254, 8380, 13130, 2]
// Exports: default

// Module 14043 (getApplicationIdForActivity)
import Constants from "Constants" /* 2024 */;
import isStreamingDefault from "isStreaming" /* 8380 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10254 */;
import isOnXboxDefault from "isOnXbox" /* 13130 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 13540 */;
import TwitchApplicationRecord from "TwitchApplicationRecord" /* 14044 */;
import XboxApplicationRecord from "XboxApplicationRecord" /* 14045 */;
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
