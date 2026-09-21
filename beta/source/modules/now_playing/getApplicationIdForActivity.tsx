// Module ID: 14020
// Function ID: 14021
// Name: getApplicationIdForActivity
// Dependencies: [13535, 14021, 14022, 2008, 11195, 8533, 13298, 2]
// Exports: default

// Module 14020 (getApplicationIdForActivity)
import Constants from "Constants" /* 2008 */;
import isStreamingDefault from "isStreaming" /* 8533 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 11195 */;
import isOnXboxDefault from "isOnXbox" /* 13298 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 13535 */;
import TwitchApplicationRecord from "TwitchApplicationRecord" /* 14021 */;
import XboxApplicationRecord from "XboxApplicationRecord" /* 14022 */;
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
