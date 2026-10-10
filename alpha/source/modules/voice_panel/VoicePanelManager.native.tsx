// Module ID: 18565
// Function ID: 18566
// Name: VoicePanelManager
// Dependencies: [2065, 5110, 6074, 6807, 2]

// Module 18565 (VoicePanelManager)
import ChannelStore from "ChannelStore" /* 2065 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5110 */;
import VoicePanelStore from "VoicePanelStore" /* 6074 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6807 */;
import size from "module_2" /* 2 */;

class VoicePanelManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
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
  }
}
const voicePanelManager = new VoicePanelManager();
const result = size.fileFinishedImporting("modules/voice_panel/VoicePanelManager.native.tsx");

export default voicePanelManager;
