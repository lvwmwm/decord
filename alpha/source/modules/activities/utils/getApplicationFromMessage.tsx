// Module ID: 13875
// Function ID: 13876
// Name: getApplicationFromMessage
// Dependencies: [2022, 13872, 8459, 2]
// Exports: getApplicationFromMessage

// Module 13875 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 8459 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 13872 */;
import ApplicationRecord from "ApplicationRecord" /* 2022 */;
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
