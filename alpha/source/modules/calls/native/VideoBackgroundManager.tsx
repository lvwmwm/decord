// Module ID: 8666
// Function ID: 8667
// Name: VideoBackgroundManager
// Dependencies: [4851, 7162, 2]

// Module 8666 (VideoBackgroundManager)
import SelectedChannelStore from "SelectedChannelStore" /* 4851 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7162 */;
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
