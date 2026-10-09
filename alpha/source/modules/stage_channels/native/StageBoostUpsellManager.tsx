// Module ID: 18118
// Function ID: 18119
// Name: StageBoostUpsellManager
// Dependencies: [4761, 2064, 4709, 2115, 5889, 6804, 5055, 5892, 8771, 2072, 5962, 2000, 2]

// Module 18118 (StageBoostUpsellManager)
import asyncRequire from "asyncRequire" /* 2000 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2072 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5889 */;
import StageMediaHooks from "StageMediaHooks" /* 5892 */;
import useChannelVideoLimit from "useChannelVideoLimit" /* 8771 */;
import ActionSheetStore from "ActionSheetStore" /* 4761 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6804 */;
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
                  obj3.openLazy(asyncRequire(5962, tmp7.paths), STAGE_BOOSTING_SHEET_KEY, obj2);
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
