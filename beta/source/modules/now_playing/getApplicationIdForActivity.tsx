// Module ID: 15639
// Function ID: 15640
// Name: getApplicationIdForActivity
// Dependencies: [15134, 15640, 15641, 2018, 10762, 8831, 14852, 2]
// Exports: default

// Module 15639 (getApplicationIdForActivity)
import Constants from "Constants" /* 2018 */;
import isStreamingDefault from "isStreaming" /* 8831 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10762 */;
import isOnXboxDefault from "isOnXbox" /* 14852 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 15134 */;
import TwitchApplicationRecord from "TwitchApplicationRecord" /* 15640 */;
import XboxApplicationRecord from "XboxApplicationRecord" /* 15641 */;
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
