// Module ID: 14046
// Function ID: 14047
// Name: getApplicationIdForActivity
// Dependencies: [13561, 14047, 14048, 2004, 11182, 8560, 13324, 2]
// Exports: default

// Module 14046 (getApplicationIdForActivity)
import Constants from "Constants" /* 2004 */;
import isStreamingDefault from "isStreaming" /* 8560 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 11182 */;
import isOnXboxDefault from "isOnXbox" /* 13324 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 13561 */;
import TwitchApplicationRecord from "TwitchApplicationRecord" /* 14047 */;
import XboxApplicationRecord from "XboxApplicationRecord" /* 14048 */;
import size from "module_2" /* 2 */;

const SpotifyApplication = SpotifyApplicationRecord.SpotifyApplication;
let closure_3 = TwitchApplicationRecord.TWITCH_APPLICATION_ID_PREFIX;
let closure_4 = XboxApplicationRecord.XBOX_APPLICATION_ID_PREFIX;
let closure_5 = Constants.XBOX_ACTIVITY_APPLICATION_ID;
const result = size.fileFinishedImporting("modules/now_playing/getApplicationIdForActivity.tsx");

export default function getApplicationIdForActivity(party) {
  if (isListeningOnSpotifyDefault(party)) {
    if (null != party.party) {
      if (null != party.party.id) {
        let id = SpotifyApplication.id;
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
