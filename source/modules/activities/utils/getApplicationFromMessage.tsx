// Module ID: 12782
// Function ID: 12783
// Name: getApplicationFromMessage
// Dependencies: [4479, 12779, 7242, 2]
// Exports: getApplicationFromMessage

// Module 12782 (getApplicationFromMessage)
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
