// Module ID: 11577
// Function ID: 90040
// Name: useGuildPowerupConfigureCallback
// Dependencies: [31, 653, 4098, 11550, 4021, 8438, 8441, 44, 2]
// Exports: default

// Module 11577 (useGuildPowerupConfigureCallback)
import result from "result";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
({ GuildSettingsSections: closure_4, AnalyticsSections: closure_5 } = ME);
const result = require("showActionSheet").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupConfigureCallback.tsx");

export default function useGuildPowerupConfigureCallback(arg0, skuId) {
  let closure_0 = arg0;
  let closure_1 = skuId;
  const items = [arg0, skuId.skuId];
  return React.useCallback(() => {
    skuId(outer1_2[2]).hideActionSheet(callback(outer1_2[3]).GUILD_POWERUPS_BOTTOM_SHEET_KEY);
    skuId = skuId.skuId;
    if (callback(outer1_2[4]).GUILD_POWERUP_ROLE_COLOR_SKU_ID === skuId) {
      skuId(outer1_2[5]).open(callback, outer1_4.ROLES, outer1_5.GUILD_POWERUPS_OVERVIEW_CARD);
    } else if (callback(outer1_2[4]).GUILD_POWERUP_TAG_SKU_ID === skuId) {
      if (obj2.canUseMobileServerTagSettings(callback)) {
        skuId(outer1_2[5]).open(callback, outer1_4.TAG, outer1_5.GUILD_POWERUPS_OVERVIEW_CARD);
      }
      obj2 = callback(outer1_2[6]);
    } else {
      const _HermesInternal = HermesInternal;
      skuId(outer1_2[7])(false, "Unsupported powerup SKU ID: " + skuId.skuId);
    }
    const obj = skuId(outer1_2[2]);
  }, items);
};
