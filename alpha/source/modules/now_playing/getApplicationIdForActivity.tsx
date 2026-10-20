// Module ID: 14858
// Function ID: 14859
// Name: getApplicationIdForActivity
// Dependencies: [14353, 14859, 14860, 2026, 10569, 8674, 14090, 2]
// Exports: default

// Module 14858 (getApplicationIdForActivity)
import Constants from "Constants" /* 2026 */;
import isStreamingDefault from "isStreaming" /* 8674 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10569 */;
import isOnXboxDefault from "isOnXbox" /* 14090 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 14353 */;
import TwitchApplicationRecord from "TwitchApplicationRecord" /* 14859 */;
import XboxApplicationRecord from "XboxApplicationRecord" /* 14860 */;
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
