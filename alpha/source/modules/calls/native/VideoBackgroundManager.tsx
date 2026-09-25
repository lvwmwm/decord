// Module ID: 7688
// Function ID: 7689
// Name: VideoBackgroundManager
// Dependencies: [2098, 6534, 2]

// Module 7688 (VideoBackgroundManager)
import SelectedChannelStore from "SelectedChannelStore" /* 2098 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6534 */;

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
