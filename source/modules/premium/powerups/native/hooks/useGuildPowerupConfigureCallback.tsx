// Module ID: 11566
// Function ID: 89978
// Name: useGuildPowerupConfigureCallback
// Dependencies: []
// Exports: default

// Module 11566 (useGuildPowerupConfigureCallback)
let closure_3 = importAll(dependencyMap[0]);
({ GuildSettingsSections: closure_4, AnalyticsSections: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupConfigureCallback.tsx");

export default function useGuildPowerupConfigureCallback(arg0, skuId) {
  skuId = arg0;
  const importDefault = skuId;
  const items = [arg0, skuId.skuId];
  return React.useCallback(() => {
    arg1(closure_2[2]).hideActionSheet(arg0(closure_2[3]).GUILD_POWERUPS_BOTTOM_SHEET_KEY);
    const skuId = arg1.skuId;
    if (arg0(closure_2[4]).GUILD_POWERUP_ROLE_COLOR_SKU_ID === skuId) {
      arg1(closure_2[5]).open(arg0, constants.ROLES, constants2.GUILD_POWERUPS_OVERVIEW_CARD);
    } else if (arg0(closure_2[4]).GUILD_POWERUP_TAG_SKU_ID === skuId) {
      if (obj2.canUseMobileServerTagSettings(arg0)) {
        arg1(closure_2[5]).open(arg0, constants.TAG, constants2.GUILD_POWERUPS_OVERVIEW_CARD);
      }
      const obj2 = arg0(closure_2[6]);
    } else {
      const _HermesInternal = HermesInternal;
      arg1(closure_2[7])(false, "Unsupported powerup SKU ID: " + arg1.skuId);
    }
    const obj = arg1(closure_2[2]);
  }, items);
};
