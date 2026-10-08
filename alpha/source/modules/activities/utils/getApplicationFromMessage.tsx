// Module ID: 13369
// Function ID: 13370
// Name: getApplicationFromMessage
// Dependencies: [2021, 13366, 8434, 2]
// Exports: getApplicationFromMessage

// Module 13369 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 8434 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 13366 */;
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
