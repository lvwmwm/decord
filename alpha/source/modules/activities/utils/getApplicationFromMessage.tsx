// Module ID: 14594
// Function ID: 14595
// Name: getApplicationFromMessage
// Dependencies: [2021, 14591, 8828, 2]
// Exports: getApplicationFromMessage

// Module 14594 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 8828 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 14591 */;
import ApplicationRecord from "ApplicationRecord" /* 2021 */;
import size from "module_2" /* 2 */;

const SpotifyApplication = SpotifyApplicationRecord.SpotifyApplication;
const isSpotifyParty = SpotifyConstants.isSpotifyParty;
const result = size.fileFinishedImporting("modules/activities/utils/getApplicationFromMessage.tsx");

export const getApplicationFromMessage = function getApplicationFromMessage(application) {
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
};
