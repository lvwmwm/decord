// Module ID: 12333
// Function ID: 96118
// Name: getApplicationFromMessage
// Dependencies: [4153, 12330, 8355, 2]
// Exports: getApplicationFromMessage

// Module 12333 (getApplicationFromMessage)
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
