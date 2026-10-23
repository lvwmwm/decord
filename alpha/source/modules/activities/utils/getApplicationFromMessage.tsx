// Module ID: 14530
// Function ID: 14531
// Name: getApplicationFromMessage
// Dependencies: [2024, 14527, 8826, 2]
// Exports: getApplicationFromMessage

// Module 14530 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 8826 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 14527 */;
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
