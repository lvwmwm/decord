// Module ID: 19297
// Function ID: 19298
// Name: CommonTriggerPointManager
// Dependencies: [7274, 19298, 18878, 2]

// Module 19297 (CommonTriggerPointManager)
import OpenUserSettingsTriggerPoint2 from "OpenUserSettingsTriggerPoint" /* 18878 */;
import VoiceCallTriggerPoint2 from "VoiceCallTriggerPoint" /* 19298 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7274 */;
import size from "module_2" /* 2 */;

class CommonTriggerPointManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { VOICE_CHANNEL_SELECT: applyArgumentsResult.handleVoiceChannelSelect, CALL_CREATE: applyArgumentsResult.handleCallCreate, USER_SETTINGS_MODAL_OPEN: applyArgumentsResult.handleUserSettingsModalOpen };
    return applyArgumentsResult;
  }
  handleVoiceChannelSelect(guildId) {
    guildId = guildId.guildId;
    if (null != guildId.channelId) {
      const VoiceCallTriggerPoint = VoiceCallTriggerPoint2.VoiceCallTriggerPoint;
      const trigger = VoiceCallTriggerPoint.trigger;
      const obj = { guildId };
      trigger(obj);
    }
  }
  handleCallCreate() {
    const VoiceCallTriggerPoint = VoiceCallTriggerPoint2.VoiceCallTriggerPoint;
    VoiceCallTriggerPoint.trigger();
  }
  handleUserSettingsModalOpen() {
    const OpenUserSettingsTriggerPoint = OpenUserSettingsTriggerPoint2.OpenUserSettingsTriggerPoint;
    OpenUserSettingsTriggerPoint.trigger();
  }
}
const prototype = CommonTriggerPointManager.prototype;
const commonTriggerPointManager = new CommonTriggerPointManager();
const result = size.fileFinishedImporting("modules/experiments/trigger_points/CommonTriggerPointManager.tsx");

export default commonTriggerPointManager;
