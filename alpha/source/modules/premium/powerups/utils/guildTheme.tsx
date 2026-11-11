// Module ID: 10632
// Function ID: 10633
// Name: guildTheme
// Dependencies: [5460, 5461, 504, 5464, 10633, 5466, 2]
// Exports: shouldShowGuildThemeRollback, useShouldShowGuildThemeRollback

// Module 10632 (guildTheme)
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5461 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 10633 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 5460 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const PowerupActiveStatusType = GuildPowerupsConstants.PowerupActiveStatusType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/guildTheme.tsx");

export function shouldShowGuildThemeRollback(arg0, storeRemovalDate, arg2) {
  return arg0 && null != storeRemovalDate && null != storeRemovalDate.storeRemovalDate && arg2 === PowerupActiveStatusType.POWERUP_ACTIVATED;
}
export function useShouldShowGuildThemeRollback(guildId, useGuildPowerupNewPerkMarketingVersion) {
  _require = guildId;
  const items = [GuildPowerupsStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(guildId));
  let tmp4;
  if (stateFromStores != null) {
    tmp4 = stateFromStores.allPowerups[tmp(undefined, 5464).GUILD_POWERUP_GUILD_THEME_SKU_ID];
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
}
