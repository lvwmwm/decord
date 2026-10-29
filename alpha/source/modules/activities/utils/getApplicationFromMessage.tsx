// Module ID: 15052
// Function ID: 15053
// Name: getApplicationFromMessage
// Dependencies: [2022, 15049, 8868, 2]
// Exports: getApplicationFromMessage

// Module 15052 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 8868 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 15049 */;
import ApplicationRecord from "ApplicationRecord" /* 2022 */;
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
