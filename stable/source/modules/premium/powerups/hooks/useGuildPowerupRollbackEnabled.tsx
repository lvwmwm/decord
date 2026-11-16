// Module ID: 14343
// Function ID: 14344
// Name: useGuildPowerupRollbackEnabled
// Dependencies: [5381, 5383, 2]
// Exports: default, isGuildPowerupRollbackEnabled, isGuildPowerupRollbackEnabledForSku

// Module 14343 (useGuildPowerupRollbackEnabled)
import Powerups from "Powerups" /* 5381 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 5383 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackEnabled.tsx");

export default function useGuildPowerupRollbackEnabled(guildId, skuId, useGuildPowerupNewPerkMarketingVersion) {
  const obj = ServerThemeExperiment;
  const serverThemeRollbackEnabled = obj.useServerThemeRollbackEnabled(guildId, useGuildPowerupNewPerkMarketingVersion);
  const tmp2 = skuId.skuId === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID && serverThemeRollbackEnabled;
  return tmp2;
};
export function isGuildPowerupRollbackEnabledForSku(arg0, arg1) {
  const tmp = arg0 === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID && arg1;
  return tmp;
}
export function isGuildPowerupRollbackEnabled(guildId, skuId, maybeGetPerkPurchaseablePopoutDCF) {
  let serverThemeRollbackEnabled = skuId.skuId === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID;
  if (serverThemeRollbackEnabled) {
    const tmpResult = ServerThemeExperiment;
    serverThemeRollbackEnabled = tmpResult.getServerThemeRollbackEnabled(guildId, maybeGetPerkPurchaseablePopoutDCF);
  }
  return serverThemeRollbackEnabled;
}
