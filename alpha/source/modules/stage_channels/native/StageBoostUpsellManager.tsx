// Module ID: 17902
// Function ID: 17903
// Name: StageBoostUpsellManager
// Dependencies: [4448, 2042, 4396, 2096, 5633, 7365, 4724, 5636, 9916, 2050, 5649, 1980, 2]

// Module 17902 (StageBoostUpsellManager)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import StageMediaHooks from "StageMediaHooks" /* 5636 */;
import ActionSheetStore from "ActionSheetStore" /* 4448 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import PermissionStore from "PermissionStore" /* 4396 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2096 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7365 */;

require = fn;
const STAGE_BOOSTING_SHEET_KEY = fn(5633).STAGE_BOOSTING_SHEET_KEY;
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
              if (PermissionStore.can(tmp5(2050).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel)) {
                const obj2 = { channel };
                ActionSheetActionCreatorsDefault.openLazy(tmp5(1980)(5649, tmp6.paths), STAGE_BOOSTING_SHEET_KEY, obj2);
                c8 = true;
              }
            }
            tmp5Result = tmp5(9916);
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
