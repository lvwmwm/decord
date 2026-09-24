// Module ID: 12696
// Function ID: 12697
// Name: useGuildPowerupRollbackNotificationConfig
// Dependencies: [4679, 12697, 2031, 1119, 2518, 558, 568, 504, 4683, 12698, 2]
// Exports: getGuildThemeRollbackNotificationConfig

// Module 12696 (useGuildPowerupRollbackNotificationConfig)
import util from "util" /* 1119 */;
import dismissible_content from "dismissible_content" /* 2031 */;
import _modDef2518 from "module_2518" /* 2518 */;
import getGuildPowerupFormattedDateStringDefault from "getGuildPowerupFormattedDateString" /* 12697 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4679 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
function getGuildThemeRollbackNotificationConfig(storeRemovalDate) {
  if (storeRemovalDate != null) {
    storeRemovalDate = storeRemovalDate.storeRemovalDate;
  }
  if (null != storeRemovalDate) {
    if (null != storeRemovalDate) {
      const tmp3 = getGuildPowerupFormattedDateStringDefault(storeRemovalDate);
      const obj = { dismissibleContent: dismissible_content.DismissibleContent.GUILD_THEME_POWERUP_ROLLBACK_NOTIFICATION, title: null, description: null };
      const intl = util.intl;
      const obj2 = { dateString: tmp3 };
      obj.title = intl.formatToPlainString(_modDef2518["6e2ry1"], obj2);
      const intl2 = util.intl;
      const obj5 = { startDate: tmp3, endDate: tmp3, perkName: null, boostCount: null };
      ({ title: obj3.perkName, cost: obj3.boostCount } = storeRemovalDate);
      obj.description = intl2.formatToPlainString(_modDef2518.jd8fki, obj5);
      return obj;
    }
  }
  return null;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackNotificationConfig.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildPowerupsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return GuildPowerupsStore.getStateForGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  let tmp8;
  if (stateFromStores != null) {
    tmp8 = stateFromStores.allPowerups[tmp(undefined, 4683).GUILD_POWERUP_GUILD_THEME_SKU_ID];
  }
  const tmpResult = require("initialize");
  const shouldShowGuildThemeRollback = require("guildTheme").useShouldShowGuildThemeRollback(arg0, arg1);
  if (cResult[3] === tmp8) {
    if (cResult[4] === shouldShowGuildThemeRollback) {
      let tmp10 = cResult[5];
    }
    return tmp10;
  }
  let tmp11 = null;
  if (shouldShowGuildThemeRollback) {
    if (tmp8 != null) {
      const storeRemovalDate = tmp8.storeRemovalDate;
    }
    let tmp12 = null;
    if (null != tmp8) {
      tmp12 = null;
      if (null != storeRemovalDate) {
        const tmp14 = getGuildPowerupFormattedDateStringDefault(storeRemovalDate);
        const obj2 = { dismissibleContent: tmp(2031).DismissibleContent.GUILD_THEME_POWERUP_ROLLBACK_NOTIFICATION, title: null, description: null };
        const intl = tmp(1119).intl;
        const obj3 = { dateString: tmp14 };
        obj2.title = intl.formatToPlainString(_modDef2518["6e2ry1"], obj3);
        const intl2 = tmp(1119).intl;
        const obj4 = { startDate: tmp14, endDate: tmp14, perkName: null, boostCount: null };
        ({ title: obj6.perkName, cost: obj6.boostCount } = tmp8);
        obj2.description = intl2.formatToPlainString(_modDef2518.jd8fki, obj4);
        tmp12 = obj2;
      }
    }
    tmp11 = tmp12;
  }
  cResult[3] = tmp8;
  cResult[4] = shouldShowGuildThemeRollback;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((arg0, arg1) => {
  _require = arg0;
  const items = [GuildPowerupsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  if (stateFromStores != null) {
    const tmp4 = stateFromStores.allPowerups[tmp(undefined, 4683).GUILD_POWERUP_GUILD_THEME_SKU_ID];
  }
  const obj = require("initialize");
  let tmp5 = null;
  if (tmpResult.useShouldShowGuildThemeRollback(arg0, arg1)) {
    if (tmp4 != null) {
      const storeRemovalDate = tmp4.storeRemovalDate;
    }
    let tmp6 = null;
    if (null != tmp4) {
      tmp6 = null;
      if (null != storeRemovalDate) {
        const tmp8 = getGuildPowerupFormattedDateStringDefault(storeRemovalDate);
        const obj2 = { dismissibleContent: tmp(2031).DismissibleContent.GUILD_THEME_POWERUP_ROLLBACK_NOTIFICATION, title: null, description: null };
        const intl = tmp(1119).intl;
        const obj3 = { dateString: tmp8 };
        obj2.title = intl.formatToPlainString(_modDef2518["6e2ry1"], obj3);
        const intl2 = tmp(1119).intl;
        const obj4 = { startDate: tmp8, endDate: tmp8, perkName: null, boostCount: null };
        ({ title: obj5.perkName, cost: obj5.boostCount } = tmp4);
        obj2.description = intl2.formatToPlainString(_modDef2518.jd8fki, obj4);
        tmp6 = obj2;
      }
    }
    tmp5 = tmp6;
  }
  return tmp5;
});
export { getGuildThemeRollbackNotificationConfig };
