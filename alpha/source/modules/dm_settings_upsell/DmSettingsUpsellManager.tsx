// Module ID: 19530
// Function ID: 19531
// Name: DmSettingsUpsellManager
// Dependencies: [1072, 7365, 19531, 1285, 2]
// Exports: acknowledgeDmSettingsUpsell

// Module 19530 (DmSettingsUpsellManager)
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1285 */;
import DmSettingsUpsellActionCreatorsDefault from "DmSettingsUpsellActionCreators" /* 19531 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7365 */;
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
