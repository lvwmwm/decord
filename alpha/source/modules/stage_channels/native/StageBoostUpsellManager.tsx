// Module ID: 17958
// Function ID: 17959
// Name: StageBoostUpsellManager
// Dependencies: [4759, 2063, 4707, 2115, 5888, 6797, 5054, 5891, 8762, 2072, 5960, 1999, 2]

// Module 17958 (StageBoostUpsellManager)
import asyncRequire from "asyncRequire" /* 1999 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2072 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5888 */;
import StageMediaHooks from "StageMediaHooks" /* 5891 */;
import useChannelVideoLimit from "useChannelVideoLimit" /* 8762 */;
import ActionSheetStore from "ActionSheetStore" /* 4759 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
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
                  obj3.openLazy(asyncRequire(5960, tmp7.paths), STAGE_BOOSTING_SHEET_KEY, obj2);
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
