// Module ID: 16849
// Function ID: 16850
// Name: handleDmSettingsUpsellShow
// Dependencies: [676, 5451, 16850, 530, 2]
// Exports: acknowledgeDmSettingsUpsell

// Module 16849 (handleDmSettingsUpsellShow)
import set from "set" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import ME from "ME" /* 676 */;
import initializeDefault from "initialize" /* 5451 */;
import _modDef16850 from "module_16850" /* 16850 */;

const Endpoints = ME.Endpoints;
initializeDefault;
class DmSettingsUpsellManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { DM_SETTINGS_UPSELL_SHOW: applyArgumentsResult.handleDmSettingsUpsellShow };
    return applyArgumentsResult;
  }
}
DmSettingsUpsellManager.prototype["handleDmSettingsUpsellShow"] = function handleDmSettingsUpsellShow(guildId) {
  const result = _modDef16850.openDmSettingsUpsellModal(guildId.guildId);
};
const dmSettingsUpsellManager = new DmSettingsUpsellManager();
let result = set.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellManager.tsx");

export default dmSettingsUpsellManager;
export const acknowledgeDmSettingsUpsell = function acknowledgeDmSettingsUpsell(guildId) {
  const HTTP = sendRequest.HTTP;
  return HTTP.post({ url: Endpoints.DM_SETTINGS_UPSELL_ACK(guildId), rejectWithError: false });
};
