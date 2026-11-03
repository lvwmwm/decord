// Module ID: 15278
// Function ID: 15279
// Name: getApplicationFromMessage
// Dependencies: [2145, 15275, 9035, 2]
// Exports: getApplicationFromMessage

// Module 15278 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 9035 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 15275 */;
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
