// Module ID: 13131
// Function ID: 13132
// Name: getApplicationFromMessage
// Dependencies: [4504, 13128, 8630, 2]
// Exports: getApplicationFromMessage

// Module 13131 (getApplicationFromMessage)
import closure_0 from "createExecutable" /* 4504 */;
import { SpotifyApplication } from "getIconURL" /* 13128 */;
import { isSpotifyParty } from "SPOTIFY_APP_PROTOCOL" /* 8630 */;

const result = require("set").fileFinishedImporting("modules/activities/utils/getApplicationFromMessage.tsx");

export const getApplicationFromMessage = function getApplicationFromMessage(application) {
  if (null != application.application) {
    let fromServer = closure_0.createFromServer(application.application);
  } else if (null != application.activity) {
    if (null != application.activity.party_id) {
      if (isSpotifyParty(application.activity.party_id)) {
        fromServer = SpotifyApplication;
      }
    }
  }
  return fromServer;
};
