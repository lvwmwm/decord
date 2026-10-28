// Module ID: 14817
// Function ID: 14818
// Name: getApplicationFromMessage
// Dependencies: [2021, 14814, 8865, 2]
// Exports: getApplicationFromMessage

// Module 14817 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 8865 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 14814 */;
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
