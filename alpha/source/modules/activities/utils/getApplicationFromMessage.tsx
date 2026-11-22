// Module ID: 14327
// Function ID: 14328
// Name: getApplicationFromMessage
// Dependencies: [2142, 14324, 6897, 2]
// Exports: getApplicationFromMessage

// Module 14327 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 6897 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 14324 */;
import ApplicationRecord from "ApplicationRecord" /* 2142 */;
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
