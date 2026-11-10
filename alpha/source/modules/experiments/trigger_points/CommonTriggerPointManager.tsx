// Module ID: 19852
// Function ID: 19853
// Name: CommonTriggerPointManager
// Dependencies: [7353, 19853, 19393, 2]

// Module 19852 (CommonTriggerPointManager)
import OpenUserSettingsTriggerPoint2 from "OpenUserSettingsTriggerPoint" /* 19393 */;
import VoiceCallTriggerPoint2 from "VoiceCallTriggerPoint" /* 19853 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7353 */;
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
