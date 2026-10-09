// Module ID: 12191
// Function ID: 12192
// Name: guildTheme
// Dependencies: [4968, 4969, 558, 576, 504, 4972, 12192, 4974, 2]
// Exports: shouldShowGuildThemeRollback

// Module 12191 (guildTheme)
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4969 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12192 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4968 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const PowerupActiveStatusType = GuildPowerupsConstants.PowerupActiveStatusType;
function shouldShowGuildThemeRollback(arg0, storeRemovalDate, arg2) {
  return arg0 && null != storeRemovalDate && null != storeRemovalDate.storeRemovalDate && arg2 === PowerupActiveStatusType.POWERUP_ACTIVATED;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldShowGuildThemeRollback(arg0, arg1) {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildPowerupsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function h() {
      return GuildPowerupsStore.getStateForGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let tmp8;
  if (stateFromStores != null) {
    tmp8 = stateFromStores.allPowerups[tmp(undefined, 4972).GUILD_POWERUP_GUILD_THEME_SKU_ID];
  }
  const tmp9 = usePowerupActiveStatusDefault(arg0, tmp8);
  const tmpResult2 = require("ServerThemeExperiment");
  const serverThemeRollbackEnabled = tmpResult2.useServerThemeRollbackEnabled(arg0, arg1);
  if (cResult[3] === tmp9.type) {
    if (cResult[4] === tmp8) {
      let tmp11;
      if (cResult[5] === serverThemeRollbackEnabled) {
        tmp11 = cResult[6];
      }
      return tmp11;
    }
  }
  let tmp12 = serverThemeRollbackEnabled;
  const type = tmp9.type;
  if (serverThemeRollbackEnabled) {
    tmp12 = null != tmp8;
  }
  if (tmp12) {
    tmp12 = null != tmp8.storeRemovalDate;
  }
  if (tmp12) {
    tmp12 = type === PowerupActiveStatusType.POWERUP_ACTIVATED;
  }
  cResult[3] = tmp9.type;
  cResult[4] = tmp8;
  cResult[5] = serverThemeRollbackEnabled;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : (function useShouldShowGuildThemeRollback(arg0, arg1) {
  let closure_0;
  _require = arg0;
  const items = [GuildPowerupsStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  let tmp4;
  if (stateFromStores != null) {
    tmp4 = stateFromStores.allPowerups[tmp(undefined, 4972).GUILD_POWERUP_GUILD_THEME_SKU_ID];
  }
  const tmp5 = usePowerupActiveStatusDefault(arg0, tmp4);
  const tmpResult = require("ServerThemeExperiment");
  let serverThemeRollbackEnabled = tmpResult.useServerThemeRollbackEnabled(arg0, arg1);
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
});
const result = size.fileFinishedImporting("modules/premium/powerups/utils/guildTheme.tsx");

export { shouldShowGuildThemeRollback };
export const useShouldShowGuildThemeRollback = tmp2;
