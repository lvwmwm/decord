// Module ID: 19490
// Function ID: 19491
// Name: DmSettingsUpsellManager
// Dependencies: [1071, 7484, 19491, 1284, 2]
// Exports: acknowledgeDmSettingsUpsell

// Module 19490 (DmSettingsUpsellManager)
import Constants from "Constants" /* 1071 */;
import HTTPUtils from "HTTPUtils" /* 1284 */;
import DmSettingsUpsellActionCreatorsDefault from "DmSettingsUpsellActionCreators" /* 19491 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7484 */;
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
