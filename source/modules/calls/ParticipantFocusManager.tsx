// Module ID: 16963
// Function ID: 16964
// Name: handleFocusParticipant
// Dependencies: [4519, 4461, 5438, 2]

// Module 16963 (handleFocusParticipant)
import initializeDefault from "initialize" /* 5438 */;
import closure_0 from "createRTCConnection" /* 4519 */;
import closure_1 from "getParticipants" /* 4461 */;

initializeDefault;
class ParticipantFocusManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_1, applyArgumentsResult.handleFocusParticipant);
    return applyArgumentsResult;
  }
}
ParticipantFocusManager.prototype["handleFocusParticipant"] = function handleFocusParticipant() {
  channelId = channelId.getChannelId();
  if (null != channelId) {
    channelId = store.getSelectedParticipantId(channelId);
    const videoParticipants = store.getVideoParticipants(channelId);
    const rTCConnection = channelId.getRTCConnection();
    if (rTCConnection != null) {
      const found = videoParticipants.find((id) => id.id === closure_0 && !id.localVideoDisabled);
      let id;
      if (found != null) {
        id = found.id;
      }
      const result = rTCConnection.setSelectedParticipant(id);
    }
  }
};
const participantFocusManager = new ParticipantFocusManager();
let result = require("set").fileFinishedImporting("modules/calls/ParticipantFocusManager.tsx");

export default participantFocusManager;
