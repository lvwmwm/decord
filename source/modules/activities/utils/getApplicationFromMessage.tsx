// Module ID: 12829
// Function ID: 12830
// Name: getApplicationFromMessage
// Dependencies: [4472, 12826, 8557, 2]
// Exports: getApplicationFromMessage

// Module 12829 (getApplicationFromMessage)
import closure_0 from "createExecutable" /* 4472 */;
import { SpotifyApplication } from "getIconURL" /* 12826 */;
import { isSpotifyParty } from "SPOTIFY_APP_PROTOCOL" /* 8557 */;

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
