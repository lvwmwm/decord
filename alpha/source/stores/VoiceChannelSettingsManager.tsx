// Module ID: 19631
// Function ID: 19632
// Name: VoiceChannelSettingsManager
// Dependencies: [502, 15880, 4863, 4917, 15881, 1072, 572, 7287, 2]

// Module 19631 (VoiceChannelSettingsManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import BitRateStore from "BitRateStore" /* 15880 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import VideoQualityModeStore from "VideoQualityModeStore" /* 15881 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7287 */;
import size from "module_2" /* 2 */;

function updateVoiceSettings() {
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  const obj = SelectedChannelStore;
  if (null != voiceChannelId) {
    const channel = ChannelStore.getChannel(voiceChannelId);
    const tmp5 = null != channel && tmp2 !== channel.bitrate;
    if (tmp5) {
      const obj3 = { type: "SET_CHANNEL_BITRATE", bitrate: channel.bitrate };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  }
  const voiceChannelId1 = obj.getVoiceChannelId();
  if (null != voiceChannelId1) {
    const channel1 = ChannelStore.getChannel(voiceChannelId1);
    if (null != channel1) {
      let AUTO = channel1.videoQualityMode;
      if (AUTO == null) {
        AUTO = VideoQualityMode.AUTO;
      }
      if (tmp10 !== AUTO) {
        const obj5 = { type: "SET_CHANNEL_VIDEO_QUALITY_MODE", mode: AUTO };
        const obj4 = DispatcherDefault;
        obj4.dispatch(obj5);
      }
    }
  }
}
function handleChannelUpdates(arg0) {
  const tmp = arg0.channels[Symbol.iterator]();
  while (tmp !== undefined) {
    if (SelectedChannelStore.getVoiceChannelId() === tmp2.id) {
      let tmp5 = updateVoiceSettings();
    }
    continue;
  }
}
function handleVoiceStateUpdates(voiceStates) {
  let sessionId;
  voiceStates = voiceStates.voiceStates;
  const item = voiceStates.forEach((sessionId) => {
    if (sessionId.getSessionId() === sessionId.sessionId) {
      updateVoiceSettings();
    }
  });
}
const VideoQualityMode = Constants.VideoQualityMode;
class VoiceChannelSettingsManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { CHANNEL_UPDATES: handleChannelUpdates, VOICE_STATE_UPDATES: handleVoiceStateUpdates };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const voiceChannelSettingsManager = new VoiceChannelSettingsManager();
const result = size.fileFinishedImporting("stores/VoiceChannelSettingsManager.tsx");

export default voiceChannelSettingsManager;
