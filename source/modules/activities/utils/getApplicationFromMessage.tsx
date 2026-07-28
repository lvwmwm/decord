// Module ID: 12353
// Function ID: 96102
// Name: getApplicationFromMessage
// Dependencies: [4188, 12350, 8151, 2]
// Exports: getApplicationFromMessage

// Module 12353 (getApplicationFromMessage)
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
