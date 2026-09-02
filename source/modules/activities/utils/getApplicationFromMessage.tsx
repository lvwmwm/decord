// Module ID: 13119
// Function ID: 13120
// Name: getApplicationFromMessage
// Dependencies: [4504, 13116, 8626, 2]
// Exports: getApplicationFromMessage

// Module 13119 (getApplicationFromMessage)
import closure_0 from "createExecutable" /* 4504 */;
import { SpotifyApplication } from "getIconURL" /* 13116 */;
import { isSpotifyParty } from "SPOTIFY_APP_PROTOCOL" /* 8626 */;

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
