// Module ID: 12806
// Function ID: 12807
// Name: getApplicationFromMessage
// Dependencies: [2009, 12803, 7792, 2]
// Exports: getApplicationFromMessage

// Module 12806 (getApplicationFromMessage)
import SpotifyConstants from "SpotifyConstants" /* 7792 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 12803 */;
import ApplicationRecord from "ApplicationRecord" /* 2009 */;
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
