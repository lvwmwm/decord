// Module ID: 20844
// Function ID: 20845
// Name: VoicePanelManager
// Dependencies: [5159, 6068, 6899, 11533, 7892, 2]

// Module 20844 (VoicePanelManager)
import StageChannelUnifiedCallExperiment from "StageChannelUnifiedCallExperiment" /* 11533 */;
import ChannelStore from "ChannelStore" /* 5159 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6068 */;
import VoicePanelStore from "VoicePanelStore" /* 6899 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7892 */;
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
            const obj = StageChannelUnifiedCallExperiment;
            if (!obj.isStageUnifiedCall(channel, "VoicePanelManager")) {
              state.closeChannel(channelId);
            }
          }
          const channels = state.channels;
          if (!channels.has(channelId)) {
            state.openChannel(channelId);
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
            const obj = StageChannelUnifiedCallExperiment;
            if (!obj.isStageUnifiedCall(channel, "VoicePanelManager")) {
              state.closeChannel(channelId);
            }
          }
          const channels = state.channels;
          if (!channels.has(channelId)) {
            state.openChannel(channelId);
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
