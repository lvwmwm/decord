// Module ID: 16975
// Function ID: 16976
// Name: prototype
// Dependencies: [4416, 4577, 5322, 2]

// Module 16975 (prototype)
import createRTCConnection from "createRTCConnection";
import withEqualityFn from "withEqualityFn";
import "initialize";

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
const result = require("initialize").fileFinishedImporting("modules/voice_panel/VoicePanelManager.native.tsx");

export default prototype;
