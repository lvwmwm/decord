// Module ID: 12498
// Function ID: 12499
// Name: getApplicationFromMessage
// Dependencies: [4278, 12495, 8797, 2]
// Exports: getApplicationFromMessage

// Module 12498 (getApplicationFromMessage)
import createExecutable from "createExecutable";
import { SpotifyApplication } from "getIconURL";
import { isSpotifyParty } from "WEB_OPEN";

const result = require("WEB_OPEN").fileFinishedImporting("modules/activities/utils/getApplicationFromMessage.tsx");

export const getApplicationFromMessage = function getApplicationFromMessage(application) {
  if (null != application.application) {
    let fromServer = createExecutable.createFromServer(application.application);
  } else if (null != application.activity) {
    if (null != application.activity.party_id) {
      if (isSpotifyParty(application.activity.party_id)) {
        fromServer = SpotifyApplication;
      }
    }
  }
  return fromServer;
};
