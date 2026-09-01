// Module ID: 17384
// Function ID: 17385
// Name: prototype
// Dependencies: [4554, 4728, 5486, 2]

// Module 17384 (prototype)
import initializeDefault from "initialize" /* 5486 */;
import closure_0 from "createRTCConnection" /* 4554 */;
import closure_1 from "withEqualityFn" /* 4728 */;

initializeDefault;
let prototype = function VoicePanelManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    VOICE_CHANNEL_SELECT() {
      const channelId = store.getChannelId();
      if (null != channelId) {
        const state = store2.getState();
        const channels = state.channels;
        if (!channels.has(channelId)) {
          state.openChannel(channelId);
        }
      }
    },
    RTC_CONNECTION_STATE() {
      const channelId = store.getChannelId();
      if (null != channelId) {
        const state = store2.getState();
        const channels = state.channels;
        if (!channels.has(channelId)) {
          state.openChannel(channelId);
        }
      }
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("set").fileFinishedImporting("modules/voice_panel/VoicePanelManager.native.tsx");

export default prototype;
