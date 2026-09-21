// Module ID: 13538
// Function ID: 13539
// Name: getApplicationFromMessage
// Dependencies: [2006, 13535, 8616, 2]
// Exports: getApplicationFromMessage

// Module 13538 (getApplicationFromMessage)
import ApplicationRecord from "ApplicationRecord" /* 2006 */;

const SpotifyApplication = fn(13535).SpotifyApplication;
const isSpotifyParty = fn(8616).isSpotifyParty;
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
