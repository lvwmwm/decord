// Module ID: 12192
// Function ID: 93727
// Name: getApplicationFromMessage
// Dependencies: []
// Exports: getApplicationFromMessage

// Module 12192 (getApplicationFromMessage)
let closure_0 = importDefault(dependencyMap[0]);
const SpotifyApplication = arg1(dependencyMap[1]).SpotifyApplication;
const isSpotifyParty = arg1(dependencyMap[2]).isSpotifyParty;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/activities/utils/getApplicationFromMessage.tsx");

export const getApplicationFromMessage = function getApplicationFromMessage(application) {
  if (null != application.application) {
    let fromServer = closure_0.createFromServer(application.application);
  } else if (null != application.activity) {
    if (null != application.activity.party_id) {
      if (isSpotifyParty(application.activity.party_id)) {
        fromServer = SpotifyApplication;
      }
    }
  }
  return fromServer;
};
