// Module ID: 15137
// Function ID: 15138
// Name: getApplicationFromMessage
// Dependencies: [2016, 15134, 8911, 2]
// Exports: getApplicationFromMessage

// Module 15137 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 8911 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 15134 */;
import ApplicationRecord from "ApplicationRecord" /* 2016 */;
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
