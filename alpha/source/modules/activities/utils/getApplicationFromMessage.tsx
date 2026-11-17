// Module ID: 15627
// Function ID: 15628
// Name: getApplicationFromMessage
// Dependencies: [2143, 15624, 7301, 2]
// Exports: getApplicationFromMessage

// Module 15627 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 7301 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 15624 */;
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
