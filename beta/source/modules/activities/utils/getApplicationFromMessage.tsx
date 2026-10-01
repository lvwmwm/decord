// Module ID: 12804
// Function ID: 12805
// Name: getApplicationFromMessage
// Dependencies: [2003, 12801, 7788, 2]
// Exports: getApplicationFromMessage

// Module 12804 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 7788 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 12801 */;
import ApplicationRecord from "ApplicationRecord" /* 2003 */;
import size from "module_2" /* 2 */;

const SpotifyApplication = SpotifyApplicationRecord.SpotifyApplication;
const isSpotifyParty = SpotifyConstants.isSpotifyParty;
const result = size.fileFinishedImporting("modules/activities/utils/getApplicationFromMessage.tsx");

export const getApplicationFromMessage = function getApplicationFromMessage(application) {
  let fromServer;
  if (null != application.application) {
    fromServer = ApplicationRecord.createFromServer(application.application);
  } else if (null != application.activity) {
    if (null != application.activity.party_id) {
      if (isSpotifyParty(application.activity.party_id)) {
        fromServer = SpotifyApplication;
      }
    }
  }
  return fromServer;
};
