// Module ID: 14448
// Function ID: 14449
// Name: getApplicationFromMessage
// Dependencies: [2024, 14445, 8787, 2]
// Exports: getApplicationFromMessage

// Module 14448 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 8787 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 14445 */;
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
