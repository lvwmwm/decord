// Module ID: 15479
// Function ID: 15480
// Name: getApplicationFromMessage
// Dependencies: [2140, 15476, 7227, 2]
// Exports: getApplicationFromMessage

// Module 15479 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 7227 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 15476 */;
import ApplicationRecord from "ApplicationRecord" /* 2140 */;
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
