// Module ID: 13574
// Function ID: 13575
// Name: getApplicationFromMessage
// Dependencies: [2006, 13571, 8648, 2]
// Exports: getApplicationFromMessage

// Module 13574 (getApplicationFromMessage)
import ApplicationRecord from "ApplicationRecord" /* 2006 */;

const SpotifyApplication = fn(13571).SpotifyApplication;
const isSpotifyParty = fn(8648).isSpotifyParty;
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
