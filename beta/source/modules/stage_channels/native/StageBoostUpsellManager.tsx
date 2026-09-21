// Module ID: 17890
// Function ID: 17891
// Name: StageBoostUpsellManager
// Dependencies: [4447, 2041, 4395, 2095, 5631, 7363, 4723, 5634, 9910, 2049, 5647, 1980, 2]

// Module 17890 (StageBoostUpsellManager)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import StageMediaHooks from "StageMediaHooks" /* 5634 */;
import ActionSheetStore from "ActionSheetStore" /* 4447 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import PermissionStore from "PermissionStore" /* 4395 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2095 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7363 */;

require = fn;
const STAGE_BOOSTING_SHEET_KEY = fn(5631).STAGE_BOOSTING_SHEET_KEY;
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
              if (PermissionStore.can(tmp5(2049).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel)) {
                const obj2 = { channel };
                ActionSheetActionCreatorsDefault.openLazy(tmp5(1980)(5647, tmp6.paths), STAGE_BOOSTING_SHEET_KEY, obj2);
                c8 = true;
              }
            }
            tmp5Result = tmp5(9910);
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
