// Module ID: 13407
// Function ID: 13408
// Name: useGuildPowerupRollbackModalConfig
// Dependencies: [19, 4784, 8331, 13395, 4746, 1112, 2856, 504, 13408, 8001, 13396, 2]
// Exports: default

// Module 13407 (useGuildPowerupRollbackModalConfig)
import intl3 from "intl" /* 1112 */;
import _modDef2856 from "module_2856" /* 2856 */;
import dismissible_content from "dismissible_content" /* 4746 */;
import getGuildPowerupFormattedDateStringDefault from "getGuildPowerupFormattedDateString" /* 13395 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4784 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 8331 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

function getGuildThemeRollbackModalConfig(storeRemovalDate) {
  let intl;
  let items;
  let obj2;
  let title;
  if (storeRemovalDate != null) {
    storeRemovalDate = storeRemovalDate.storeRemovalDate;
  }
  if (null != storeRemovalDate) {
    if (null != storeRemovalDate) {
      const tmp3 = getGuildPowerupFormattedDateStringDefault(storeRemovalDate);
      const obj = { dismissibleContent: dismissible_content.DismissibleContent.GUILD_THEME_POWERUP_ROLLBACK_MODAL, header: "" + title + " " + intl.formatToPlainString(_modDef2856["6e2ry1"], obj2), bodies: items, hasCancelButton: false };
      title = storeRemovalDate.title;
      intl = intl3.intl;
      const _HermesInternal = HermesInternal;
      obj2 = { dateString: tmp3 };
      const intl2 = intl3.intl;
      const obj5 = { startDate: tmp3, endDate: tmp3, perkName: null, boostCount: null };
      ({ title: obj3.perkName, cost: obj3.boostCount } = storeRemovalDate);
      items = [intl2.formatToPlainString(_modDef2856.jd8fki, obj5)];
      return obj;
    }
  }
  return null;
}
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackModalConfig.tsx");

export default function useGuildPowerupRollbackModalConfig(guildId, useMarketablePowerupPerks) {
  let closure_1;
  let flag;
  _require = guildId;
  let tmp = _require;
  const items = [GuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  flag = require("useHasAllocateBoostPermission")(guildId);
  if (flag == null) {
    flag = false;
  }
  const items1 = [GuildPowerupsStore];
  const tmpResult = tmp(flag[7]);
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => GuildPowerupsStore.getStateForGuild(guildId));
  let tmp5;
  if (stateFromStores1 != null) {
    const allPowerups = stateFromStores1.allPowerups;
    if (allPowerups != null) {
      tmp5 = allPowerups[tmp(undefined, tmp2[9]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
    }
  }
  importDefault = tmp5;
  const tmpResult2 = tmp(flag[10]);
  if (flag) {
    flag = tmpResult2.useShouldShowGuildThemeRollback(guildId, useMarketablePowerupPerks);
  }
  if (flag) {
    flag = null != stateFromStores;
  }
  const items2 = [flag, tmp5];
  const obj2 = {
    shouldShow: flag,
    modalConfig: react.useMemo(() => {
      let tmp = null;
      if (flag) {
        tmp = getGuildThemeRollbackModalConfig(closure_1);
      }
      return tmp;
    }, items2)
  };
  return obj2;
};
export { getGuildThemeRollbackModalConfig };
