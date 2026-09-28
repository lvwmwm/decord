// Module ID: 12804
// Function ID: 12805
// Name: getApplicationFromMessage
// Dependencies: [2003, 12801, 7788, 2]
// Exports: getApplicationFromMessage

// Module 12804 (getApplicationFromMessage)
import ApplicationRecord from "ApplicationRecord" /* 2003 */;

const SpotifyApplication = fn(12801).SpotifyApplication;
const isSpotifyParty = fn(7788).isSpotifyParty;
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
