// Module ID: 19771
// Function ID: 19772
// Name: StageBoostUpsellManager
// Dependencies: [5382, 4990, 5073, 5044, 6829, 7407, 5381, 6832, 9352, 4998, 6884, 2123, 2]

// Module 19771 (StageBoostUpsellManager)
import asyncRequire from "asyncRequire" /* 2123 */;
import StageChannelPermissions from "StageChannelPermissions" /* 4998 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6829 */;
import StageMediaHooks from "StageMediaHooks" /* 6832 */;
import useChannelVideoLimit from "useChannelVideoLimit" /* 9352 */;
import ActionSheetStore from "ActionSheetStore" /* 5382 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import PermissionStore from "PermissionStore" /* 5073 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5044 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7407 */;
import size from "module_2" /* 2 */;

const STAGE_BOOSTING_SHEET_KEY = StageChannelsConstants.STAGE_BOOSTING_SHEET_KEY;
let c8 = false;
class StageBoostUpsellManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { VOICE_CHANNEL_SELECT: applyArgumentsResult.handleVoiceChannelSelect, VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates };
    return applyArgumentsResult;
  }
  handleVoiceChannelSelect(channelId) {
    const tmp = null == channelId.channelId && ActionSheetStore.getKey() === STAGE_BOOSTING_SHEET_KEY;
    if (tmp) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(STAGE_BOOSTING_SHEET_KEY);
    }
  }
  handleVoiceStateUpdates() {
    const tmp = c8;
    if (!tmp) {
      const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      if (null != voiceChannelId) {
        const channel = ChannelStore.getChannel(voiceChannelId);
        if (null != channel) {
          let isGuildStageVoiceResult;
          if (channel != null) {
            isGuildStageVoiceResult = channel.isGuildStageVoice();
          }
          if (isGuildStageVoiceResult) {
            const obj = StageMediaHooks;
            const tmp7 = dependencyMap;
            if (obj.getStageHasMedia(channel.id)) {
              const tmp6Result = useChannelVideoLimit;
              if (tmp6Result.getChannelVideoLimit(channel).reachedLimit) {
                if (PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel)) {
                  const obj2 = { channel };
                  const obj3 = ActionSheetActionCreatorsDefault;
                  obj3.openLazy(asyncRequire(6884, tmp7.paths), STAGE_BOOSTING_SHEET_KEY, obj2);
                  c8 = true;
                }
              }
            }
          }
        }
      }
    }
  }
}
const prototype = StageBoostUpsellManager.prototype;
const stageBoostUpsellManager = new StageBoostUpsellManager();
const result = size.fileFinishedImporting("modules/stage_channels/native/StageBoostUpsellManager.tsx");

export default stageBoostUpsellManager;
