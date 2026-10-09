// Module ID: 12250
// Function ID: 12251
// Name: useGetExpiringGuildPowerups
// Dependencies: [19, 4968, 558, 576, 504, 12185, 1388, 2]

// Module 12250 (useGetExpiringGuildPowerups)
import GlobalUtils from "GlobalUtils" /* 1388 */;
import getExpiringGuildEntitlements from "getExpiringGuildEntitlements" /* 12185 */;
import react from "react" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4968 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetExpiringGuildPowerups(arg0) {
  let allPowerups;
  let closure_0;
  let first;
  let tmp6;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildPowerupsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
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
  if (null != stateFromStores) {
    let tmp11;
    allPowerups = stateFromStores.allPowerups;
    const unlockedPowerups = stateFromStores.unlockedPowerups;
    if (cResult[4] === allPowerups) {
      let tmp10;
      if (cResult[5] === unlockedPowerups) {
        tmp10 = cResult[6];
      }
      tmp8 = tmp10;
    }
    const _Object = Object;
    const tmpResult2 = require("getExpiringGuildEntitlements");
    const expiringGuildEntitlements = tmpResult2.getExpiringGuildEntitlements(Object.values(unlockedPowerups));
    if (cResult[7] !== allPowerups) {
      class G {
        constructor(arg0) {
          return allPowerups[arg0.sku_id];
        }
      }
      cResult[7] = allPowerups;
      cResult[8] = G;
      tmp11 = G;
    } else {
      class G {
        constructor(arg0) {
          return allPowerups[arg0.sku_id];
        }
      }
    }
    const mapped = expiringGuildEntitlements.map(tmp11);
    const found = mapped.filter(tmp(tmp2[6]).isNotNullish);
    cResult[4] = allPowerups;
    cResult[5] = unlockedPowerups;
    cResult[6] = found;
    tmp10 = found;
  } else {
    class G {
      constructor(arg0) {
        return allPowerups[arg0.sku_id];
      }
    }
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor(arg0) {
          return allPowerups[arg0.sku_id];
        }
      }
      cResult[3] = tmp9;
      tmp8 = tmp9;
    } else {
      class G {
        constructor(arg0) {
          return allPowerups[arg0.sku_id];
        }
      }
    }
  }
  return tmp8;
}) : (function useGetExpiringGuildPowerups(arg0) {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  let obj = require("get initialized");
  const items = [GuildPowerupsStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const items1 = [stateFromStores];
  return react.useMemo(() => {
    if (null == stateFromStores) {
      return [];
    } else {
      const allPowerups = tmp.allPowerups;
      const unlockedPowerups = tmp.unlockedPowerups;
      const _Object = Object;
      const obj = getExpiringGuildEntitlements;
      const expiringGuildEntitlements = obj.getExpiringGuildEntitlements(Object.values(unlockedPowerups));
      const mapped = expiringGuildEntitlements.map((item) => allPowerups[item.sku_id]);
      return mapped.filter(GlobalUtils.isNotNullish);
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGetExpiringGuildPowerups.tsx");

export default tmp2;
