// Module ID: 12745
// Function ID: 12746
// Name: useGuildPowerupConfigureCallback
// Dependencies: [19, 1078, 558, 568, 4757, 12716, 4683, 9865, 9868, 38, 2]

// Module 12745 (useGuildPowerupConfigureCallback)
import Powerups from "Powerups" /* 4683 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 12716 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Constants = fn(1078);
({ GuildSettingsSections: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupConfigureCallback.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, skuId) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === arg0) {
    if (cResult[1] === skuId.skuId) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  const fn = function s() {
    ActionSheetActionCreatorsDefault.hideActionSheet(openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY);
    skuId = skuId.skuId;
    if (Powerups.GUILD_POWERUP_ROLE_COLOR_SKU_ID === skuId) {
      tmp(9865).open(closure_0, constants.ROLES, constants2.GUILD_POWERUPS_OVERVIEW_CARD);
    } else if (tmp3(4683).GUILD_POWERUP_TAG_SKU_ID === skuId) {
      if (tmp3Result.canUseMobileServerTagSettings(closure_0)) {
        tmp(9865).open(tmp9, constants.TAG, constants2.GUILD_POWERUPS_OVERVIEW_CARD);
      }
      tmp3Result = tmp3(9868);
      tmp9 = closure_0;
    } else {
      const _HermesInternal = HermesInternal;
      tmp(38)(false, "Unsupported powerup SKU ID: " + tmp5.skuId);
    }
    tmp5 = skuId;
  };
  cResult[0] = arg0;
  cResult[1] = skuId.skuId;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((arg0, skuId) => {
  closure_0 = arg0;
  const items = [arg0, skuId.skuId];
  return noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY);
    skuId = skuId.skuId;
    if (Powerups.GUILD_POWERUP_ROLE_COLOR_SKU_ID === skuId) {
      tmp(9865).open(closure_0, constants.ROLES, constants2.GUILD_POWERUPS_OVERVIEW_CARD);
    } else if (tmp3(4683).GUILD_POWERUP_TAG_SKU_ID === skuId) {
      if (tmp3Result.canUseMobileServerTagSettings(closure_0)) {
        tmp(9865).open(tmp9, constants.TAG, constants2.GUILD_POWERUPS_OVERVIEW_CARD);
      }
      tmp3Result = tmp3(9868);
      tmp9 = closure_0;
    } else {
      const _HermesInternal = HermesInternal;
      tmp(38)(false, "Unsupported powerup SKU ID: " + tmp5.skuId);
    }
    tmp5 = skuId;
  }, items);
});
