// Module ID: 15889
// Function ID: 15890
// Name: getApplicationIdForActivity
// Dependencies: [15371, 15890, 15891, 2142, 10898, 8923, 15054, 2]
// Exports: default

// Module 15889 (getApplicationIdForActivity)
import Constants from "Constants" /* 2142 */;
import isStreamingDefault from "isStreaming" /* 8923 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10898 */;
import isOnXboxDefault from "isOnXbox" /* 15054 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 15371 */;
import TwitchApplicationRecord from "TwitchApplicationRecord" /* 15890 */;
import XboxApplicationRecord from "XboxApplicationRecord" /* 15891 */;
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
