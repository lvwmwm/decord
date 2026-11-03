// Module ID: 8947
// Function ID: 8948
// Name: VideoBackgroundManager
// Dependencies: [5044, 7407, 2]

// Module 8947 (VideoBackgroundManager)
import SelectedChannelStore from "SelectedChannelStore" /* 5044 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7407 */;
import size from "module_2" /* 2 */;

class VideoBackgroundManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.previousSelectedVoiceChannelId = SelectedChannelStore.getVoiceChannelId();
    applyArgumentsResult.cachedDominantColors = {};
    applyArgumentsResult._handleSelectVoiceChannel = function _handleSelectVoiceChannel(channelId) {
      channelId = channelId.channelId;
      if (applyArgumentsResult.previousSelectedVoiceChannelId !== channelId) {
        applyArgumentsResult.cachedDominantColors = {};
      }
      applyArgumentsResult.previousSelectedVoiceChannelId = channelId;
    };
    applyArgumentsResult.actions = { VOICE_CHANNEL_SELECT: applyArgumentsResult._handleSelectVoiceChannel };
    return applyArgumentsResult;
  }
}
const videoBackgroundManager = new VideoBackgroundManager();
const result = size.fileFinishedImporting("modules/calls/native/VideoBackgroundManager.tsx");

export default videoBackgroundManager;
