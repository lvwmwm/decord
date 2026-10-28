// Module ID: 19667
// Function ID: 19668
// Name: VoicePanelManager
// Dependencies: [4856, 5750, 6839, 7250, 2]

// Module 19667 (VoicePanelManager)
import ChannelStore from "ChannelStore" /* 4856 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5750 */;
import VoicePanelStore from "VoicePanelStore" /* 6839 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7250 */;
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
