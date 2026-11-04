// Module ID: 10770
// Function ID: 10771
// Name: conjureModelSettingsConnection
// Dependencies: [584, 10751, 2]
// Exports: sendModelSettings

// Module 10770 (conjureModelSettingsConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10751 */;
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
export const sendModelSettings = function sendModelSettings(projectId, arg1) {
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
};
