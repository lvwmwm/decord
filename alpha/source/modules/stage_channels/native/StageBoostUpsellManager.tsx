// Module ID: 17601
// Function ID: 17602
// Name: StageBoostUpsellManager
// Dependencies: [4561, 2051, 4509, 2103, 5571, 6613, 4854, 5574, 9305, 2060, 5587, 1987, 2]

// Module 17601 (StageBoostUpsellManager)
import asyncRequire from "asyncRequire" /* 1987 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2060 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5571 */;
import StageMediaHooks from "StageMediaHooks" /* 5574 */;
import useChannelVideoLimit from "useChannelVideoLimit" /* 9305 */;
import ActionSheetStore from "ActionSheetStore" /* 4561 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
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
                  obj3.openLazy(asyncRequire(5587, tmp7.paths), STAGE_BOOSTING_SHEET_KEY, obj2);
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
