// Module ID: 13564
// Function ID: 13565
// Name: getApplicationFromMessage
// Dependencies: [2002, 13561, 8643, 2]
// Exports: getApplicationFromMessage

// Module 13564 (getApplicationFromMessage)
import ApplicationRecord from "ApplicationRecord" /* 2002 */;

const SpotifyApplication = fn(13561).SpotifyApplication;
const isSpotifyParty = fn(8643).isSpotifyParty;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/getApplicationFromMessage.tsx");

export const getApplicationFromMessage = function getApplicationFromMessage(application) {
  if (null != application.application) {
    let fromServer = ApplicationRecord.createFromServer(application.application);
  } else if (null != application.activity) {
    if (null != application.activity.party_id) {
      if (isSpotifyParty(application.activity.party_id)) {
        fromServer = SpotifyApplication;
      }
    }
  }
  return fromServer;
};
