// Module ID: 11993
// Function ID: 11994
// Name: useGuildPowerupRollbackNotificationConfig
// Dependencies: [4723, 11994, 2029, 1115, 2519, 504, 4727, 11995, 2]
// Exports: default, getGuildThemeRollbackNotificationConfig

// Module 11993 (useGuildPowerupRollbackNotificationConfig)
import intl3 from "intl" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import _modDef2519 from "module_2519" /* 2519 */;
import getGuildPowerupFormattedDateStringDefault from "getGuildPowerupFormattedDateString" /* 11994 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4723 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackNotificationConfig.tsx");

export default function useGuildPowerupRollbackNotificationConfig(guildId, useGuildPowerupNewPerkMarketingVersion) {
  let intl;
  let intl2;
  let obj3;
  let obj4;
  let tmp4;
  _require = guildId;
  const items = [GuildPowerupsStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(guildId));
  if (stateFromStores != null) {
    tmp4 = stateFromStores.allPowerups[require("Powerups").GUILD_POWERUP_GUILD_THEME_SKU_ID];
  }
  let tmp5 = null;
  const tmpResult = require("guildTheme");
  if (tmpResult.useShouldShowGuildThemeRollback(guildId, useGuildPowerupNewPerkMarketingVersion)) {
    let storeRemovalDate;
    if (tmp4 != null) {
      storeRemovalDate = tmp4.storeRemovalDate;
    }
    let tmp6 = null;
    if (null != tmp4) {
      tmp6 = null;
      if (null != storeRemovalDate) {
        const tmp8 = getGuildPowerupFormattedDateStringDefault(storeRemovalDate);
        const obj2 = { dismissibleContent: require("dismissible_content").DismissibleContent.GUILD_THEME_POWERUP_ROLLBACK_NOTIFICATION, title: intl.formatToPlainString(_modDef2519["6e2ry1"], obj3), description: intl2.formatToPlainString(_modDef2519.jd8fki, obj4) };
        intl = tmp(1115).intl;
        obj3 = { dateString: tmp8 };
        intl2 = tmp(1115).intl;
        obj4 = { startDate: tmp8, endDate: tmp8, perkName: null, boostCount: null };
        ({ title: obj5.perkName, cost: obj5.boostCount } = tmp4);
        tmp6 = obj2;
      }
    }
    tmp5 = tmp6;
  }
  return tmp5;
};
export const getGuildThemeRollbackNotificationConfig = function getGuildThemeRollbackNotificationConfig(storeRemovalDate) {
  let intl;
  let intl2;
  let obj2;
  let obj5;
  if (storeRemovalDate != null) {
    storeRemovalDate = storeRemovalDate.storeRemovalDate;
  }
  if (null != storeRemovalDate) {
    if (null != storeRemovalDate) {
      const tmp3 = getGuildPowerupFormattedDateStringDefault(storeRemovalDate);
      const obj = { dismissibleContent: dismissible_content.DismissibleContent.GUILD_THEME_POWERUP_ROLLBACK_NOTIFICATION, title: intl.formatToPlainString(_modDef2519["6e2ry1"], obj2), description: intl2.formatToPlainString(_modDef2519.jd8fki, obj5) };
      intl = intl3.intl;
      obj2 = { dateString: tmp3 };
      intl2 = intl3.intl;
      obj5 = { startDate: tmp3, endDate: tmp3, perkName: null, boostCount: null };
      ({ title: obj3.perkName, cost: obj3.boostCount } = storeRemovalDate);
      return obj;
    }
  }
  return null;
};
