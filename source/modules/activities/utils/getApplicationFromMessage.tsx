// Module ID: 12897
// Function ID: 12898
// Name: getApplicationFromMessage
// Dependencies: [4504, 12894, 8611, 2]
// Exports: getApplicationFromMessage

// Module 12897 (getApplicationFromMessage)
import closure_0 from "createExecutable" /* 4504 */;
import { SpotifyApplication } from "getIconURL" /* 12894 */;
import { isSpotifyParty } from "SPOTIFY_APP_PROTOCOL" /* 8611 */;

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
