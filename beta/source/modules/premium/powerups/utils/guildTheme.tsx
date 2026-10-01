// Module ID: 11995
// Function ID: 11996
// Name: guildTheme
// Dependencies: [4723, 4724, 504, 4727, 11996, 4761, 2]
// Exports: shouldShowGuildThemeRollback, useShouldShowGuildThemeRollback

// Module 11995 (guildTheme)
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4724 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 11996 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4723 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const PowerupActiveStatusType = GuildPowerupsConstants.PowerupActiveStatusType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/guildTheme.tsx");

export const shouldShowGuildThemeRollback = function shouldShowGuildThemeRollback(arg0, storeRemovalDate, arg2) {
  return arg0 && null != storeRemovalDate && null != storeRemovalDate.storeRemovalDate && arg2 === PowerupActiveStatusType.POWERUP_ACTIVATED;
};
export const useShouldShowGuildThemeRollback = function useShouldShowGuildThemeRollback(guildId, useGuildPowerupNewPerkMarketingVersion) {
  _require = guildId;
  const items = [GuildPowerupsStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(guildId));
  let tmp4;
  if (stateFromStores != null) {
    tmp4 = stateFromStores.allPowerups[tmp(undefined, 4727).GUILD_POWERUP_GUILD_THEME_SKU_ID];
  }
  const tmp5 = usePowerupActiveStatusDefault(guildId, tmp4);
  const tmpResult = require("ServerThemeExperiment");
  let serverThemeRollbackEnabled = tmpResult.useServerThemeRollbackEnabled(guildId, useGuildPowerupNewPerkMarketingVersion);
  const type = tmp5.type;
  if (serverThemeRollbackEnabled) {
    serverThemeRollbackEnabled = null != tmp4;
  }
  if (serverThemeRollbackEnabled) {
    serverThemeRollbackEnabled = null != tmp4.storeRemovalDate;
  }
  if (serverThemeRollbackEnabled) {
    serverThemeRollbackEnabled = type === PowerupActiveStatusType.POWERUP_ACTIVATED;
  }
  return serverThemeRollbackEnabled;
};
