// Module ID: 12535
// Function ID: 12536
// Name: getApplicationFromMessage
// Dependencies: [4308, 12532, 8826, 2]
// Exports: getApplicationFromMessage

// Module 12535 (getApplicationFromMessage)
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
