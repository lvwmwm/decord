// Module ID: 12750
// Function ID: 12751
// Name: useGuildPowerupRollbackEnabled
// Dependencies: [4648, 4684, 2]
// Exports: default, isGuildPowerupRollbackEnabled, isGuildPowerupRollbackEnabledForSku

// Module 12750 (useGuildPowerupRollbackEnabled)
import Powerups from "Powerups" /* 4648 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 4684 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackEnabled.tsx");

export default function useGuildPowerupRollbackEnabled(guildId, skuId, useGuildPowerupNewPerkMarketingVersion) {
  const serverThemeRollbackEnabled = ServerThemeExperiment.useServerThemeRollbackEnabled(guildId, useGuildPowerupNewPerkMarketingVersion);
  return skuId.skuId === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID && serverThemeRollbackEnabled;
};
export const isGuildPowerupRollbackEnabledForSku = function isGuildPowerupRollbackEnabledForSku(arg0, arg1) {
  return arg0 === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID && arg1;
};
export const isGuildPowerupRollbackEnabled = function isGuildPowerupRollbackEnabled(guildId, skuId, maybeGetPerkPurchaseablePopoutDCF) {
  let serverThemeRollbackEnabled = skuId.skuId === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID;
  if (serverThemeRollbackEnabled) {
    serverThemeRollbackEnabled = ServerThemeExperiment.getServerThemeRollbackEnabled(guildId, maybeGetPerkPurchaseablePopoutDCF);
    const tmpResult = ServerThemeExperiment;
  }
  return serverThemeRollbackEnabled;
};
