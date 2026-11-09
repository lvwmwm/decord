// Module ID: 15419
// Function ID: 15420
// Name: getApplicationFromMessage
// Dependencies: [2140, 15416, 8985, 2]
// Exports: getApplicationFromMessage

// Module 15419 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 8985 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 15416 */;
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
