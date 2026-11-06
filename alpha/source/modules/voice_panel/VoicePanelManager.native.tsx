// Module ID: 20340
// Function ID: 20341
// Name: VoicePanelManager
// Dependencies: [5019, 5920, 6955, 11345, 7373, 2]

// Module 20340 (VoicePanelManager)
import StageChannelUnifiedCallExperiment from "StageChannelUnifiedCallExperiment" /* 11345 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5920 */;
import VoicePanelStore from "VoicePanelStore" /* 6955 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7373 */;
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
