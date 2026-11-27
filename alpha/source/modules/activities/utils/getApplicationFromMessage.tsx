// Module ID: 14540
// Function ID: 14541
// Name: getApplicationFromMessage
// Dependencies: [2143, 14537, 7632, 2]
// Exports: getApplicationFromMessage

// Module 14540 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 7632 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 14537 */;
import ApplicationRecord from "ApplicationRecord" /* 2143 */;
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
