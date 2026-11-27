// Module ID: 13491
// Function ID: 13492
// Name: useGuildPowerupRollbackEnabled
// Dependencies: [8301, 13492, 2]
// Exports: default, isGuildPowerupRollbackEnabled, isGuildPowerupRollbackEnabledForSku

// Module 13491 (useGuildPowerupRollbackEnabled)
import Powerups from "Powerups" /* 8301 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 13492 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackEnabled.tsx");

export default function useGuildPowerupRollbackEnabled(guildId, skuId, useMarketablePowerupPerks) {
  const obj = ServerThemeExperiment;
  const serverThemeRollbackEnabled = obj.useServerThemeRollbackEnabled(guildId, useMarketablePowerupPerks);
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
