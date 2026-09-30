// Module ID: 13001
// Function ID: 13002
// Name: getApplicationFromMessage
// Dependencies: [2003, 12998, 7983, 2]
// Exports: getApplicationFromMessage

// Module 13001 (getApplicationFromMessage)
import ApplicationRecord from "ApplicationRecord" /* 2003 */;

const SpotifyApplication = fn(12998).SpotifyApplication;
const isSpotifyParty = fn(7983).isSpotifyParty;
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
