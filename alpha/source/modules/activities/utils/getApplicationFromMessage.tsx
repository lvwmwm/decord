// Module ID: 15365
// Function ID: 15366
// Name: getApplicationFromMessage
// Dependencies: [2145, 15362, 9052, 2]
// Exports: getApplicationFromMessage

// Module 15365 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 9052 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 15362 */;
import ApplicationRecord from "ApplicationRecord" /* 2145 */;
import size from "module_2" /* 2 */;

const SpotifyApplication = SpotifyApplicationRecord.SpotifyApplication;
const isSpotifyParty = SpotifyConstants.isSpotifyParty;
const result = size.fileFinishedImporting("modules/activities/utils/getApplicationFromMessage.tsx");

export function getApplicationFromMessage(application) {
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
}
