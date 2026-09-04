// Module ID: 13163
// Function ID: 13164
// Name: getApplicationFromMessage
// Dependencies: [4507, 13160, 8270, 2]
// Exports: getApplicationFromMessage

// Module 13163 (getApplicationFromMessage)
import closure_0 from "createExecutable" /* 4507 */;
import { SpotifyApplication } from "getIconURL" /* 13160 */;
import { isSpotifyParty } from "SPOTIFY_APP_PROTOCOL" /* 8270 */;

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
