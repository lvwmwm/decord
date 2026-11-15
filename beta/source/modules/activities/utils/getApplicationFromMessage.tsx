// Module ID: 15449
// Function ID: 15450
// Name: getApplicationFromMessage
// Dependencies: [2140, 15446, 9018, 2]
// Exports: getApplicationFromMessage

// Module 15449 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 9018 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 15446 */;
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
