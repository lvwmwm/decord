// Module ID: 19372
// Function ID: 19373
// Name: DmSettingsUpsellManager
// Dependencies: [1072, 7281, 19373, 1283, 2]
// Exports: acknowledgeDmSettingsUpsell

// Module 19372 (DmSettingsUpsellManager)
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import DmSettingsUpsellActionCreatorsDefault from "DmSettingsUpsellActionCreators" /* 19373 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7281 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
class DmSettingsUpsellManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { DM_SETTINGS_UPSELL_SHOW: applyArgumentsResult.handleDmSettingsUpsellShow };
    return applyArgumentsResult;
  }
  handleDmSettingsUpsellShow(guildId) {
    const obj = DmSettingsUpsellActionCreatorsDefault;
    const result = obj.openDmSettingsUpsellModal(guildId.guildId);
  }
}
const prototype = DmSettingsUpsellManager.prototype;
const dmSettingsUpsellManager = new DmSettingsUpsellManager();
let result = size.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellManager.tsx");

export default dmSettingsUpsellManager;
export function acknowledgeDmSettingsUpsell(guildId) {
  const HTTP = HTTPUtils.HTTP;
  const obj = { url: Endpoints.DM_SETTINGS_UPSELL_ACK(guildId), rejectWithError: false };
  return HTTP.post(obj);
}
