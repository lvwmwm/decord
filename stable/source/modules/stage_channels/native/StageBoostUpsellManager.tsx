// Module ID: 17600
// Function ID: 17601
// Name: StageBoostUpsellManager
// Dependencies: [4327, 1957, 4275, 2011, 5495, 7221, 4603, 5498, 9217, 1965, 5511, 1896, 2]

// Module 17600 (StageBoostUpsellManager)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import StageMediaHooks from "StageMediaHooks" /* 5498 */;
import ActionSheetStore from "ActionSheetStore" /* 4327 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4275 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7221 */;

require = fn;
const STAGE_BOOSTING_SHEET_KEY = fn(5495).STAGE_BOOSTING_SHEET_KEY;
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
              if (PermissionStore.can(tmp5(1965).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel)) {
                const obj2 = { channel };
                ActionSheetActionCreatorsDefault.openLazy(tmp5(1896)(5511, tmp6.paths), STAGE_BOOSTING_SHEET_KEY, obj2);
                c8 = true;
              }
            }
            tmp5Result = tmp5(9217);
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
