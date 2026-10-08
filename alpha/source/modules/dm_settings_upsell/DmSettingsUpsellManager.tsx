// Module ID: 17794
// Function ID: 17795
// Name: DmSettingsUpsellManager
// Dependencies: [1085, 6797, 17795, 1294, 2]
// Exports: acknowledgeDmSettingsUpsell

// Module 17794 (DmSettingsUpsellManager)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import DmSettingsUpsellActionCreatorsDefault from "DmSettingsUpsellActionCreators" /* 17795 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
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
export const acknowledgeDmSettingsUpsell = function acknowledgeDmSettingsUpsell(guildId) {
  const HTTP = HTTPUtils.HTTP;
  const obj = { url: Endpoints.DM_SETTINGS_UPSELL_ACK(guildId), rejectWithError: false };
  return HTTP.post(obj);
};
