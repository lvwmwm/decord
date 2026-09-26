// Module ID: 18264
// Function ID: 18265
// Name: VoicePanelManager
// Dependencies: [2041, 4811, 4996, 7395, 2]

// Module 18264 (VoicePanelManager)
import ChannelStore from "ChannelStore" /* 2041 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4811 */;
import VoicePanelStore from "VoicePanelStore" /* 4996 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7395 */;

const prototype = function VoicePanelManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    VOICE_CHANNEL_SELECT() {
      const channelId = RTCConnectionStore.getChannelId();
      if (null != channelId) {
        const state = VoicePanelStore.getState();
        const channel = ChannelStore.getChannel(channelId);
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (isGuildStageVoiceResult) {
          state.closeChannel(channelId);
        } else {
          const channels = state.channels;
          if (!channels.has(channelId)) {
            state.openChannel(channelId);
          }
        }
      }
    },
    RTC_CONNECTION_STATE() {
      const channelId = RTCConnectionStore.getChannelId();
      if (null != channelId) {
        const state = VoicePanelStore.getState();
        const channel = ChannelStore.getChannel(channelId);
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (isGuildStageVoiceResult) {
          state.closeChannel(channelId);
        } else {
          const channels = state.channels;
          if (!channels.has(channelId)) {
            state.openChannel(channelId);
          }
        }
      }
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/VoicePanelManager.native.tsx");

export default prototype1;
