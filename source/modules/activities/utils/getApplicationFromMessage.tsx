// Module ID: 12550
// Function ID: 12551
// Name: getApplicationFromMessage
// Dependencies: [4325, 12547, 8843, 2]
// Exports: getApplicationFromMessage

// Module 12550 (getApplicationFromMessage)
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
