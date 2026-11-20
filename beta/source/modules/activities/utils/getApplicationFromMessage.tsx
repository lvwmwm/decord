// Module ID: 15595
// Function ID: 15596
// Name: getApplicationFromMessage
// Dependencies: [2143, 15592, 7291, 2]
// Exports: getApplicationFromMessage

// Module 15595 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 7291 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 15592 */;
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
