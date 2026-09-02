// Module ID: 17154
// Function ID: 17155
// Name: handleDmSettingsUpsellShow
// Dependencies: [673, 5494, 17155, 527, 2]
// Exports: acknowledgeDmSettingsUpsell

// Module 17154 (handleDmSettingsUpsellShow)
import set from "set" /* 2 */;
import sendRequest from "sendRequest" /* 527 */;
import ME from "ME" /* 673 */;
import initializeDefault from "initialize" /* 5494 */;
import _modDef17155 from "module_17155" /* 17155 */;

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
  const result = _modDef17155.openDmSettingsUpsellModal(guildId.guildId);
};
const dmSettingsUpsellManager = new DmSettingsUpsellManager();
let result = set.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellManager.tsx");

export default dmSettingsUpsellManager;
export const acknowledgeDmSettingsUpsell = function acknowledgeDmSettingsUpsell(guildId) {
  const HTTP = sendRequest.HTTP;
  return HTTP.post({ url: Endpoints.DM_SETTINGS_UPSELL_ACK(guildId), rejectWithError: false });
};
