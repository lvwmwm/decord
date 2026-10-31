// Module ID: 8823
// Function ID: 8824
// Name: VideoBackgroundManager
// Dependencies: [4917, 7287, 2]

// Module 8823 (VideoBackgroundManager)
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7287 */;
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
