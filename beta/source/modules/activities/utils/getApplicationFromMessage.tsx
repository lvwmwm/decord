// Module ID: 15451
// Function ID: 15452
// Name: getApplicationFromMessage
// Dependencies: [2140, 15448, 9018, 2]
// Exports: getApplicationFromMessage

// Module 15451 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 9018 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 15448 */;
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
