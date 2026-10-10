// Module ID: 13515
// Function ID: 13516
// Name: getApplicationFromMessage
// Dependencies: [2022, 13512, 8458, 2]
// Exports: getApplicationFromMessage

// Module 13515 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 8458 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 13512 */;
import ApplicationRecord from "ApplicationRecord" /* 2022 */;
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
