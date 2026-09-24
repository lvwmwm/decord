// Module ID: 12695
// Function ID: 12696
// Name: useGuildPowerupRollbackEnabled
// Dependencies: [4683, 558, 568, 4719, 2]
// Exports: isGuildPowerupRollbackEnabled, isGuildPowerupRollbackEnabledForSku

// Module 12695 (useGuildPowerupRollbackEnabled)
import c from "c" /* 568 */;
import Powerups from "Powerups" /* 4683 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 4719 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function isGuildPowerupRollbackEnabledForSku(arg0, arg1) {
  return arg0 === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID && arg1;
}
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackEnabled.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, skuId, arg2) => {
  const cResult = c.c(3);
  const serverThemeRollbackEnabled = ServerThemeExperiment.useServerThemeRollbackEnabled(arg0, arg2);
  if (cResult[0] === serverThemeRollbackEnabled) {
    if (cResult[1] === skuId.skuId) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = skuId.skuId === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID && serverThemeRollbackEnabled;
  cResult[0] = serverThemeRollbackEnabled;
  cResult[1] = skuId.skuId;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((arg0, skuId, arg2) => {
  const serverThemeRollbackEnabled = ServerThemeExperiment.useServerThemeRollbackEnabled(arg0, arg2);
  return skuId.skuId === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID && serverThemeRollbackEnabled;
});
export { isGuildPowerupRollbackEnabledForSku };
export const isGuildPowerupRollbackEnabled = function isGuildPowerupRollbackEnabled(guildId, skuId, maybeGetPerkPurchaseablePopoutDCF) {
  let serverThemeRollbackEnabled = skuId.skuId === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID;
  if (serverThemeRollbackEnabled) {
    serverThemeRollbackEnabled = ServerThemeExperiment.getServerThemeRollbackEnabled(guildId, maybeGetPerkPurchaseablePopoutDCF);
    const tmpResult = ServerThemeExperiment;
  }
  return serverThemeRollbackEnabled;
};
