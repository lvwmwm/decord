// Module ID: 17118
// Function ID: 17119
// Name: CommonTriggerPointManager
// Dependencies: [6540, 17119, 16729, 2]

// Module 17118 (CommonTriggerPointManager)
import OpenUserSettingsTriggerPoint2 from "OpenUserSettingsTriggerPoint" /* 16729 */;
import VoiceCallTriggerPoint2 from "VoiceCallTriggerPoint" /* 17119 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6540 */;
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
