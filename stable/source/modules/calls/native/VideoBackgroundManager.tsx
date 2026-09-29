// Module ID: 8551
// Function ID: 8552
// Name: VideoBackgroundManager
// Dependencies: [2095, 7395, 2]

// Module 8551 (VideoBackgroundManager)
import SelectedChannelStore from "SelectedChannelStore" /* 2095 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7395 */;

const prototype = function VideoBackgroundManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  SelectedChannelStore = applyArgumentsResult;
  applyArgumentsResult.previousSelectedVoiceChannelId = SelectedChannelStore.getVoiceChannelId();
  applyArgumentsResult.cachedDominantColors = {};
  applyArgumentsResult._handleSelectVoiceChannel = function _handleSelectVoiceChannel(channelId) {
    channelId = channelId.channelId;
    if (applyArgumentsResult.previousSelectedVoiceChannelId !== channelId) {
      tmp.cachedDominantColors = {};
    }
    applyArgumentsResult.previousSelectedVoiceChannelId = channelId;
  };
  applyArgumentsResult.actions = { VOICE_CHANNEL_SELECT: applyArgumentsResult._handleSelectVoiceChannel };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/native/VideoBackgroundManager.tsx");

export default prototype1;
