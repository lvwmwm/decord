// Module ID: 19005
// Function ID: 19006
// Name: VoiceChannelSettingsManager
// Dependencies: [502, 15336, 4855, 4906, 15337, 1087, 584, 7246, 2]

// Module 19005 (VoiceChannelSettingsManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1087 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import BitRateStore from "BitRateStore" /* 15336 */;
import ChannelStore from "ChannelStore" /* 4855 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4906 */;
import VideoQualityModeStore from "VideoQualityModeStore" /* 15337 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7246 */;
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
