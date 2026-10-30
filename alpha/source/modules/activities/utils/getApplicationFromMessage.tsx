// Module ID: 15096
// Function ID: 15097
// Name: getApplicationFromMessage
// Dependencies: [2017, 15093, 8902, 2]
// Exports: getApplicationFromMessage

// Module 15096 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 8902 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 15093 */;
import ApplicationRecord from "ApplicationRecord" /* 2017 */;
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
