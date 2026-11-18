// Module ID: 14254
// Function ID: 14255
// Name: getApplicationFromMessage
// Dependencies: [2143, 14251, 6806, 2]
// Exports: getApplicationFromMessage

// Module 14254 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 6806 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 14251 */;
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
