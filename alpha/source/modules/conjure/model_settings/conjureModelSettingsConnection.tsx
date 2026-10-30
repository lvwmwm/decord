// Module ID: 10873
// Function ID: 10874
// Name: conjureModelSettingsConnection
// Dependencies: [572, 10854, 2]
// Exports: sendModelSettings

// Module 10873 (conjureModelSettingsConnection)
import DispatcherDefault from "Dispatcher" /* 572 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10854 */;
import size from "module_2" /* 2 */;

let obj = {
  model_settings(settings, projectId) {
    let tier_settings;
    let tiers;
    projectId = projectId.projectId;
    const obj = { type: "CONJURE_MODEL_SETTINGS_SET", projectId, settings: settings.settings, tierSettings: tier_settings, tiers, choices: settings.choices };
    tier_settings = settings.tier_settings;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (tier_settings == null) {
      tier_settings = null;
    }
    tiers = settings.tiers;
    if (tiers == null) {
      tiers = null;
    }
    dispatch(obj);
  }
};
const result = size.fileFinishedImporting("modules/conjure/model_settings/conjureModelSettingsConnection.tsx");

export const modelSettingsFrameHandlers = obj;
export function sendModelSettings(projectId, arg1) {
  const obj = conjureProjectSockets;
  const conjureSocket = obj.getConjureSocket(projectId);
  try {
    if (null == conjureSocket) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Not connected");
      throw error;
    } else {
      conjureSocket.sendModelSettings(arg1);
    }
  } catch (err) {
  }
}
