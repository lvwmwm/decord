// Module ID: 12310
// Function ID: 95932
// Name: getApplicationFromMessage
// Dependencies: [4154, 12307, 8113, 2]
// Exports: getApplicationFromMessage

// Module 12310 (getApplicationFromMessage)
import _callSuper from "_callSuper";
import { SpotifyApplication } from "_isNativeReflectConstruct";
import { isSpotifyParty } from "spotifyUtmParams";

const result = require("spotifyUtmParams").fileFinishedImporting("modules/activities/utils/getApplicationFromMessage.tsx");

export const getApplicationFromMessage = function getApplicationFromMessage(application) {
  if (null != application.application) {
    let fromServer = _callSuper.createFromServer(application.application);
  } else if (null != application.activity) {
    if (null != application.activity.party_id) {
      if (isSpotifyParty(application.activity.party_id)) {
        fromServer = SpotifyApplication;
      }
    }
  }
  return fromServer;
};
