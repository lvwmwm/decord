// Module ID: 13314
// Function ID: 13315
// Name: useGuildPowerupConfigureCallback
// Dependencies: [19, 1071, 5008, 13286, 7881, 7874, 7878, 38, 2]
// Exports: default

// Module 13314 (useGuildPowerupConfigureCallback)
import _modDef38 from "module_38" /* 38 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 7874 */;
import GuildSettingsServerTagUtils from "GuildSettingsServerTagUtils" /* 7878 */;
import Powerups from "Powerups" /* 7881 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 13286 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ GuildSettingsSections: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupConfigureCallback.tsx");

export default function useGuildPowerupConfigureCallback(arg0, skuId) {
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
};
