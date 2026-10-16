// Module ID: 14241
// Function ID: 14242
// Name: getApplicationFromMessage
// Dependencies: [2024, 14238, 8685, 2]
// Exports: getApplicationFromMessage

// Module 14241 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 8685 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 14238 */;
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
