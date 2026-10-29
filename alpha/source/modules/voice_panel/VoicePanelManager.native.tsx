// Module ID: 19889
// Function ID: 19890
// Name: VoicePanelManager
// Dependencies: [4857, 5752, 6862, 7274, 2]

// Module 19889 (VoicePanelManager)
import ChannelStore from "ChannelStore" /* 4857 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5752 */;
import VoicePanelStore from "VoicePanelStore" /* 6862 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7274 */;
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
