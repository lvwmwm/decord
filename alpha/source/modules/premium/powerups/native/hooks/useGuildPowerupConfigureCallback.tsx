// Module ID: 12297
// Function ID: 12298
// Name: useGuildPowerupConfigureCallback
// Dependencies: [19, 1085, 558, 576, 5054, 12268, 4971, 8613, 8616, 38, 2]

// Module 12297 (useGuildPowerupConfigureCallback)
import _modDef38 from "module_38" /* 38 */;
import Powerups from "Powerups" /* 4971 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8613 */;
import GuildSettingsServerTagUtils from "GuildSettingsServerTagUtils" /* 8616 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 12268 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
({ GuildSettingsSections: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildPowerupConfigureCallback(arg0, skuId) {
  let closure_0;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === arg0) {
    let tmp2;
    if (cResult[1] === skuId.skuId) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  const fn = function s() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY);
    skuId = skuId.skuId;
    const tmp5 = skuId;
    if (Powerups.GUILD_POWERUP_ROLE_COLOR_SKU_ID === skuId) {
      const tmpResult = GuildSettingsActionCreatorsDefault;
      tmpResult.open(closure_0, constants.ROLES, hasOwnProperty.GUILD_POWERUPS_OVERVIEW_CARD);
    } else if (Powerups.GUILD_POWERUP_TAG_SKU_ID === skuId) {
      const tmp3Result = GuildSettingsServerTagUtils;
      const tmp9 = closure_0;
      if (tmp3Result.canUseMobileServerTagSettings(closure_0)) {
        const tmpResult3 = GuildSettingsActionCreatorsDefault;
        tmpResult3.open(tmp9, constants.TAG, hasOwnProperty.GUILD_POWERUPS_OVERVIEW_CARD);
      }
    } else {
      const _HermesInternal = HermesInternal;
      const tmpResult4 = _modDef38;
      tmpResult4(false, "Unsupported powerup SKU ID: " + tmp5.skuId);
    }
  };
  cResult[0] = arg0;
  cResult[1] = skuId.skuId;
  cResult[2] = fn;
  tmp2 = fn;
}) : (function useGuildPowerupConfigureCallback(arg0, skuId) {
  let closure_0 = arg0;
  const items = [arg0, skuId.skuId];
  return react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY);
    skuId = skuId.skuId;
    const tmp5 = skuId;
    if (Powerups.GUILD_POWERUP_ROLE_COLOR_SKU_ID === skuId) {
      const tmpResult = GuildSettingsActionCreatorsDefault;
      tmpResult.open(closure_0, constants.ROLES, hasOwnProperty.GUILD_POWERUPS_OVERVIEW_CARD);
    } else if (Powerups.GUILD_POWERUP_TAG_SKU_ID === skuId) {
      const tmp3Result = GuildSettingsServerTagUtils;
      const tmp9 = closure_0;
      if (tmp3Result.canUseMobileServerTagSettings(closure_0)) {
        const tmpResult3 = GuildSettingsActionCreatorsDefault;
        tmpResult3.open(tmp9, constants.TAG, hasOwnProperty.GUILD_POWERUPS_OVERVIEW_CARD);
      }
    } else {
      const _HermesInternal = HermesInternal;
      const tmpResult4 = _modDef38;
      tmpResult4(false, "Unsupported powerup SKU ID: " + tmp5.skuId);
    }
  }, items);
});
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupConfigureCallback.tsx");

export default tmp3;
