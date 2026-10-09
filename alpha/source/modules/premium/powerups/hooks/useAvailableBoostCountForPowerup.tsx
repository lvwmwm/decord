// Module ID: 12229
// Function ID: 12230
// Name: useAvailableBoostCountForPowerup
// Dependencies: [32, 19, 2086, 4968, 4969, 558, 576, 504, 8011, 1388, 2]

// Module 12229 (useAvailableBoostCountForPowerup)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4968 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
({ GuildPowerupType: metroImportDefault, POWERUPS_INCLUDED_IN_LEVEL: metroImportAll, LEVEL_SKU_ID_TO_BOOSTING_TIER: c9 } = GuildPowerupsConstants);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAvailableBoostCountForPowerup(arg0, type) {
  let closure_0;
  let first;
  let tmp6;
  let tmp8;
  let tmp9;
  _require = arg0;
  const tmp = _require;
  const tmp2 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class S {
      constructor() {
        return GuildStore.getGuild(closure_0);
      }
    }
    cResult[1] = arg0;
    cResult[2] = S;
    tmp6 = S;
  } else {
    class S {
      constructor() {
        return GuildStore.getGuild(closure_0);
      }
    }
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return GuildStore.getGuild(closure_0);
      }
    }
    const items1 = [GuildPowerupsStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    class S {
      constructor() {
        return GuildStore.getGuild(closure_0);
      }
    }
  }
  if (cResult[4] !== arg0) {
    class S {
      constructor() {
        return GuildStore.getGuild(closure_0);
      }
    }
    cResult[4] = arg0;
    cResult[5] = tmp10;
    tmp9 = tmp10;
  } else {
    class S {
      constructor() {
        return GuildStore.getGuild(closure_0);
      }
    }
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
  if (null != type) {
    class S {
      constructor() {
        return GuildStore.getGuild(closure_0);
      }
    }
    if (type.type === constants.LEVEL) {
      class S {
        constructor() {
          return GuildStore.getGuild(closure_0);
        }
      }
      if (cResult[15] !== arr3) {
        let reduced;
        class S {
          constructor() {
            return GuildStore.getGuild(closure_0);
          }
        }
        if (arr3 != null) {
          class S {
            constructor() {
              return GuildStore.getGuild(closure_0);
            }
          }
          reduced = arr3.reduce((acc, cost) => acc + cost.cost, 0);
        }
        cResult[15] = arr3;
        cResult[16] = reduced;
      } else {
        class S {
          constructor() {
            return GuildStore.getGuild(closure_0);
          }
        }
      }
      const _Math = Math;
      if (stateFromStores != null) {
        class S {
          constructor() {
            return GuildStore.getGuild(closure_0);
          }
        }
      }
      if (undefined == null) {
        class S {
          constructor() {
            return GuildStore.getGuild(closure_0);
          }
        }
      }
      const diff = tmp16 - tmp12;
      if (tmp14 == null) {
        class S {
          constructor() {
            return GuildStore.getGuild(closure_0);
          }
        }
      }
      return max(diff + tmp14, 0);
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return GuildStore.getGuild(closure_0);
      }
    }
    cResult[6] = tmp13;
  } else {
    class S {
      constructor() {
        return GuildStore.getGuild(closure_0);
      }
    }
  }
}) : (function useAvailableBoostCountForPowerup(arg0, arg1) {
  let closure_1;
  let stateFromStores1;
  _require = arg0;
  importDefault = arg1;
  let items = [GuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  const items1 = [GuildPowerupsStore];
  const obj2 = require("get initialized");
  stateFromStores1 = obj2.useStateFromStores(items1, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const items2 = [arg1, stateFromStores1];
  const spent = require("useGuildPowerupsBoostCount")(arg0).spent;
  const memo = react.useMemo(() => {
    let allPowerups;
    const tmp = closure_1;
    if (null != closure_1) {
      if (tmp.type === constants.LEVEL) {
        if (null != stateFromStores1) {
          let items;
          closure_0 = tmp9;
          if (null == closure_1_9[tmp.skuId]) {
            items = [];
          } else {
            const tmp2 = globalThis;
            const _Object = Object;
            const entries = Object.entries(closure_1_8);
            const found = entries.filter((item) => {
              let tmp;
              let tmp2;
              [tmp, tmp2] = item;
              return tmp2 === closure_0 && null != stateFromStores1.unlockedPowerups[tmp];
            });
            const mapped = found.map((item) => {
              let tmp;
              [tmp] = item;
              return allPowerups.allPowerups[tmp];
            });
            items = mapped.filter(closure_0(stateFromStores1[9]).isNotNullish);
          }
          return items;
        }
      }
    }
    return [];
  }, items2);
  let num;
  if (memo != null) {
    num = memo.reduce((acc, cost) => acc + cost.cost, 0);
  }
  let num3;
  const _Math = Math;
  if (stateFromStores != null) {
    num3 = stateFromStores.premiumSubscriberCount;
  }
  if (num3 == null) {
    num3 = 0;
  }
  const diff = num3 - spent;
  if (num == null) {
    num = 0;
  }
  return max(diff + num, 0);
});
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useAvailableBoostCountForPowerup.tsx");

export default tmp3;
