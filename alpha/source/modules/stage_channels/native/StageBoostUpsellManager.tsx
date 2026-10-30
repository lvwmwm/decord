// Module ID: 19557
// Function ID: 19558
// Name: StageBoostUpsellManager
// Dependencies: [5254, 4858, 4941, 4912, 6703, 7281, 5253, 6706, 9205, 4866, 6758, 1995, 2]

// Module 19557 (StageBoostUpsellManager)
import asyncRequire from "asyncRequire" /* 1995 */;
import StageChannelPermissions from "StageChannelPermissions" /* 4866 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6703 */;
import StageMediaHooks from "StageMediaHooks" /* 6706 */;
import useChannelVideoLimit from "useChannelVideoLimit" /* 9205 */;
import ActionSheetStore from "ActionSheetStore" /* 5254 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7281 */;
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
                  obj3.openLazy(asyncRequire(6758, tmp7.paths), STAGE_BOOSTING_SHEET_KEY, obj2);
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
