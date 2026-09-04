// Module ID: 17386
// Function ID: 17387
// Name: handleFocusParticipant
// Dependencies: [4557, 4497, 7058, 2]

// Module 17386 (handleFocusParticipant)
import initializeDefault from "initialize" /* 7058 */;
import closure_0 from "createRTCConnection" /* 4557 */;
import closure_1 from "getParticipants" /* 4497 */;

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
