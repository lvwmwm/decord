// Module ID: 7696
// Function ID: 7697
// Name: VideoBackgroundManager
// Dependencies: [2099, 6539, 2]

// Module 7696 (VideoBackgroundManager)
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6539 */;
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
