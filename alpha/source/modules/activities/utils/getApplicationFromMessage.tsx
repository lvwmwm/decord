// Module ID: 14329
// Function ID: 14330
// Name: getApplicationFromMessage
// Dependencies: [2142, 14326, 6897, 2]
// Exports: getApplicationFromMessage

// Module 14329 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 6897 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 14326 */;
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
