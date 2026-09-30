// Module ID: 17480
// Function ID: 17481
// Name: StageBoostUpsellManager
// Dependencies: [4551, 2045, 4499, 2099, 5923, 6735, 4830, 5926, 9302, 2053, 5939, 1981, 2]

// Module 17480 (StageBoostUpsellManager)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import StageMediaHooks from "StageMediaHooks" /* 5926 */;
import ActionSheetStore from "ActionSheetStore" /* 4551 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4499 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6735 */;

require = fn;
const STAGE_BOOSTING_SHEET_KEY = fn(5923).STAGE_BOOSTING_SHEET_KEY;
let c8 = false;
class StageBoostUpsellManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { VOICE_CHANNEL_SELECT: applyArgumentsResult.handleVoiceChannelSelect, VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates };
    return applyArgumentsResult;
  }
}
const prototype = StageBoostUpsellManager.prototype;
prototype["handleVoiceChannelSelect"] = function handleVoiceChannelSelect(channelId) {
  let tmp = null == channelId.channelId;
  if (tmp) {
    tmp = ActionSheetStore.getKey() === STAGE_BOOSTING_SHEET_KEY;
  }
  if (tmp) {
    ActionSheetActionCreatorsDefault.hideActionSheet(STAGE_BOOSTING_SHEET_KEY);
  }
};
prototype["handleVoiceStateUpdates"] = function handleVoiceStateUpdates() {
  if (!c8) {
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    if (null != voiceChannelId) {
      const channel = ChannelStore.getChannel(voiceChannelId);
      if (null != channel) {
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (isGuildStageVoiceResult) {
          if (obj.getStageHasMedia(channel.id)) {
            if (tmp5Result.getChannelVideoLimit(channel).reachedLimit) {
              if (PermissionStore.can(tmp5(2053).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel)) {
                const obj2 = { channel };
                ActionSheetActionCreatorsDefault.openLazy(tmp5(1981)(5939, tmp6.paths), STAGE_BOOSTING_SHEET_KEY, obj2);
                c8 = true;
              }
            }
            tmp5Result = tmp5(9302);
          }
          obj = StageMediaHooks;
          tmp6 = dependencyMap;
        }
      }
    }
  }
};
const stageBoostUpsellManager = new StageBoostUpsellManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/StageBoostUpsellManager.tsx");

export default stageBoostUpsellManager;
