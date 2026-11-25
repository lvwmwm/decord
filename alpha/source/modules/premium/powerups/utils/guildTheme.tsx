// Module ID: 13436
// Function ID: 13437
// Name: guildTheme
// Dependencies: [8254, 8255, 504, 8258, 13437, 13432, 2]
// Exports: shouldShowGuildThemeRollback, useShouldShowGuildThemeRollback

// Module 13436 (guildTheme)
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 8255 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 13437 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 8254 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const PowerupActiveStatusType = GuildPowerupsConstants.PowerupActiveStatusType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/guildTheme.tsx");

export function shouldShowGuildThemeRollback(arg0, storeRemovalDate, arg2) {
  return arg0 && null != storeRemovalDate && null != storeRemovalDate.storeRemovalDate && arg2 === PowerupActiveStatusType.POWERUP_ACTIVATED;
}
export function useShouldShowGuildThemeRollback(guildId, useMarketablePowerupPerks) {
  _require = guildId;
  const items = [GuildPowerupsStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(guildId));
  let tmp4;
  if (stateFromStores != null) {
    tmp4 = stateFromStores.allPowerups[tmp(undefined, 8258).GUILD_POWERUP_GUILD_THEME_SKU_ID];
  }
  const tmp5 = usePowerupActiveStatusDefault(guildId, tmp4);
  const tmpResult = require("ServerThemeExperiment");
  let serverThemeRollbackEnabled = tmpResult.useServerThemeRollbackEnabled(guildId, useMarketablePowerupPerks);
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
}
