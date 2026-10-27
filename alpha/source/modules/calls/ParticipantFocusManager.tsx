// Module ID: 18936
// Function ID: 18937
// Name: ParticipantFocusManager
// Dependencies: [5714, 6772, 7214, 2]

// Module 18936 (ParticipantFocusManager)
import RTCConnectionStore from "RTCConnectionStore" /* 5714 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6772 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7214 */;
import size from "module_2" /* 2 */;

let map;

class ParticipantFocusManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    map = new Map();
    applyArgumentsResult.stores = map.set(ChannelRTCStore, applyArgumentsResult.handleFocusParticipant);
    return applyArgumentsResult;
  }
  handleFocusParticipant() {
    const channelId = RTCConnectionStore.getChannelId();
    const obj = RTCConnectionStore;
    if (null != channelId) {
      const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(channelId);
      const videoParticipants = ChannelRTCStore.getVideoParticipants(channelId);
      const rTCConnection = obj.getRTCConnection();
      if (rTCConnection != null) {
        const setSelectedParticipant = rTCConnection.setSelectedParticipant;
        const found = videoParticipants.find((id) => id.id === closure_0 && !id.localVideoDisabled);
        let id;
        if (found != null) {
          id = found.id;
        }
        const result = setSelectedParticipant(id);
      }
    }
  }
}
const prototype = ParticipantFocusManager.prototype;
const participantFocusManager = new ParticipantFocusManager();
let result = size.fileFinishedImporting("modules/calls/ParticipantFocusManager.tsx");

export default participantFocusManager;
