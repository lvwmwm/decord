// Module ID: 16146
// Function ID: 16147
// Name: handleVoiceChannelSelect
// Dependencies: [5134, 16147, 15725, 2]

// Module 16146 (handleVoiceChannelSelect)
import "initialize";

const require = arg1;
class CommonTriggerPointManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { VOICE_CHANNEL_SELECT: applyArgumentsResult.handleVoiceChannelSelect, CALL_CREATE: applyArgumentsResult.handleCallCreate, USER_SETTINGS_MODAL_OPEN: applyArgumentsResult.handleUserSettingsModalOpen };
    return applyArgumentsResult;
  }
}
const prototype = CommonTriggerPointManager.prototype;
prototype["handleVoiceChannelSelect"] = function handleVoiceChannelSelect(guildId) {
  guildId = guildId.guildId;
  if (null != guildId.channelId) {
    const VoiceCallTriggerPoint = require(16147) /* commonTriggerPointConfiguration */.VoiceCallTriggerPoint;
    const obj = { guildId: null };
    obj[0] = guildId;
    VoiceCallTriggerPoint.trigger(obj);
  }
};
prototype["handleCallCreate"] = function handleCallCreate() {
  const VoiceCallTriggerPoint = require(16147) /* commonTriggerPointConfiguration */.VoiceCallTriggerPoint;
  VoiceCallTriggerPoint.trigger();
};
prototype["handleUserSettingsModalOpen"] = function handleUserSettingsModalOpen() {
  const OpenUserSettingsTriggerPoint = require(15725) /* commonTriggerPointConfiguration */.OpenUserSettingsTriggerPoint;
  OpenUserSettingsTriggerPoint.trigger();
};
const commonTriggerPointManager = new CommonTriggerPointManager();
const result = require("commonTriggerPointConfiguration").fileFinishedImporting("modules/experiments/trigger_points/CommonTriggerPointManager.tsx");

export default commonTriggerPointManager;
