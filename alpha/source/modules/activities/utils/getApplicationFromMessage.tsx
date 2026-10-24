// Module ID: 14553
// Function ID: 14554
// Name: getApplicationFromMessage
// Dependencies: [2024, 14550, 8828, 2]
// Exports: getApplicationFromMessage

// Module 14553 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 8828 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 14550 */;
import ApplicationRecord from "ApplicationRecord" /* 2024 */;
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
