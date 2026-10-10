// Module ID: 12246
// Function ID: 12247
// Name: useGuildPowerupRollbackModalConfig
// Dependencies: [19, 2087, 5007, 12234, 2049, 1126, 2600, 558, 576, 504, 12247, 5011, 12235, 2]

// Module 12246 (useGuildPowerupRollbackModalConfig)
import intl3 from "intl" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import _modDef2600 from "module_2600" /* 2600 */;
import getGuildPowerupFormattedDateStringDefault from "getGuildPowerupFormattedDateString" /* 12234 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12247 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2087 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 5007 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
      const obj = { dismissibleContent: dismissible_content.DismissibleContent.GUILD_THEME_POWERUP_ROLLBACK_MODAL, header: "" + title + " " + intl.formatToPlainString(_modDef2600["6e2ry1"], obj2), bodies: items, hasCancelButton: false };
      title = storeRemovalDate.title;
      intl = intl3.intl;
      const _HermesInternal = HermesInternal;
      obj2 = { dateString: tmp3 };
      const intl2 = intl3.intl;
      const obj5 = { startDate: tmp3, endDate: tmp3, perkName: null, boostCount: null };
      ({ title: obj3.perkName, cost: obj3.boostCount } = storeRemovalDate);
      items = [intl2.formatToPlainString(_modDef2600.jd8fki, obj5)];
      return obj;
    }
  }
  return null;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildPowerupRollbackModalConfig(arg0, arg1) {
  let closure_0;
  let first;
  let tmp10;
  let tmp17;
  let tmp6;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return GuildStore.getGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let flag = useHasAllocateBoostPermissionDefault(arg0);
  if (flag == null) {
    flag = false;
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildPowerupsStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    class S {
      constructor() {
        return GuildPowerupsStore.getStateForGuild(closure_0);
      }
    }
    cResult[4] = arg0;
    cResult[5] = S;
    tmp10 = S;
  } else {
    class S {
      constructor() {
        return GuildPowerupsStore.getStateForGuild(closure_0);
      }
    }
  }
  const tmpResult3 = require("get initialized");
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp10);
  if (stateFromStores1 != null) {
    class S {
      constructor() {
        return GuildPowerupsStore.getStateForGuild(closure_0);
      }
    }
    if (tmp13 != null) {
      class S {
        constructor() {
          return GuildPowerupsStore.getStateForGuild(closure_0);
        }
      }
    }
  }
  require("guildTheme");
  if (flag) {
    class S {
      constructor() {
        return GuildPowerupsStore.getStateForGuild(closure_0);
      }
    }
  }
  if (flag) {
    class S {
      constructor() {
        return GuildPowerupsStore.getStateForGuild(closure_0);
      }
    }
  }
  if (cResult[6] === undefined) {
    class S {
      constructor() {
        return GuildPowerupsStore.getStateForGuild(closure_0);
      }
    }
    if (cResult[9] === tmp15) {
      class S {
        constructor() {
          return GuildPowerupsStore.getStateForGuild(closure_0);
        }
      }
      return tmp17;
    }
    const obj2 = { shouldShow: flag, modalConfig: tmp15 };
    cResult[9] = tmp15;
    cResult[10] = flag;
    cResult[11] = obj2;
    tmp17 = obj2;
  }
  let tmp16 = null;
  if (flag) {
    class S {
      constructor() {
        return GuildPowerupsStore.getStateForGuild(closure_0);
      }
    }
    tmp16 = getGuildThemeRollbackModalConfig(tmp12);
  }
  cResult[6] = undefined;
  cResult[7] = flag;
  cResult[8] = tmp16;
}) : (function useGuildPowerupRollbackModalConfig(arg0, arg1) {
  let closure_0;
  let closure_1;
  let flag;
  _require = arg0;
  let tmp = _require;
  const items = [GuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  flag = require("useHasAllocateBoostPermission")(arg0);
  if (flag == null) {
    flag = false;
  }
  const items1 = [GuildPowerupsStore];
  const tmpResult = tmp(flag[9]);
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => GuildPowerupsStore.getStateForGuild(closure_0));
  let tmp5;
  if (stateFromStores1 != null) {
    const allPowerups = stateFromStores1.allPowerups;
    if (allPowerups != null) {
      tmp5 = allPowerups[tmp(undefined, tmp2[11]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
    }
  }
  importDefault = tmp5;
  const tmpResult2 = tmp(flag[12]);
  if (flag) {
    flag = tmpResult2.useShouldShowGuildThemeRollback(arg0, arg1);
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
});
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackModalConfig.tsx");

export default tmp2;
export { getGuildThemeRollbackModalConfig };
