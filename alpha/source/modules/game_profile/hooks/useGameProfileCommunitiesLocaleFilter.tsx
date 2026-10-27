// Module ID: 9509
// Function ID: 9510
// Name: useGameProfileCommunitiesLocaleFilter
// Dependencies: [19, 9510, 558, 576, 12, 1385, 2]

// Module 9509 (useGameProfileCommunitiesLocaleFilter)
import _modDef12 from "module_12" /* 12 */;
import react2 from "react" /* 576 */;
import GameProfileCommunitiesLocaleFilterStore from "GameProfileCommunitiesLocaleFilterStore" /* 9510 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const GlobalUtils = tmp(1385);
let closure_4 = GameProfileCommunitiesLocaleFilterStore.useGameProfileCommunitiesLocaleFilterExclusions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfileCommunitiesLocaleFilter(arg0, arg1) {
  let arr;
  let arr4;
  let tmp13;
  let tmp = require;
  const obj = react2;
  const cResult = obj.c(14);
  const tmp4 = closure_4(arg0);
  const _require = tmp4;
  if (cResult[0] !== arg1) {
    let tmp6;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function u(preferredLocale) {
        return preferredLocale.preferredLocale;
      };
      cResult[2] = fn;
      tmp6 = fn;
    } else {
      tmp6 = cResult[2];
    }
    let items = arg1;
    const uniq = _modDef12.uniq;
    _modDef12;
    if (arg1 == null) {
      items = [];
    }
    const mapped = items.map(tmp6);
    const uniqResult = uniq(mapped.filter(GlobalUtils.isNotNullish));
    cResult[0] = arg1;
    cResult[1] = uniqResult;
    arr = uniqResult;
  } else {
    arr = cResult[1];
  }
  if (cResult[3] !== arg1) {
    let items1 = arg1;
    if (arg1 == null) {
      items1 = [];
    }
    cResult[3] = arg1;
    cResult[4] = items1;
    arr4 = items1;
  } else {
    arr4 = cResult[4];
  }
  if (cResult[5] === tmp4) {
    let tmp12;
    if (cResult[6] === arr4) {
      tmp12 = cResult[7];
    }
    if (cResult[10] === tmp12) {
      if (cResult[11] === arr) {
        let tmp16;
        if (cResult[12] === arr.length >= 2) {
          tmp16 = cResult[13];
        }
        return tmp16;
      }
    }
    const obj2 = { locales: arr, filteredGuilds: tmp12, showLocaleFilter: arr.length >= 2 };
    cResult[10] = tmp12;
    cResult[11] = arr;
    cResult[12] = arr.length >= 2;
    cResult[13] = obj2;
    tmp16 = obj2;
  }
  if (cResult[8] !== tmp4) {
    class L {
      constructor(preferredLocale) {
        const tmp = null == preferredLocale.preferredLocale || !set.has(preferredLocale.preferredLocale);
        return tmp;
      }
    }
    cResult[8] = tmp4;
    cResult[9] = L;
    tmp13 = L;
  } else {
    class L {
      constructor(preferredLocale) {
        const tmp = null == preferredLocale.preferredLocale || !set.has(preferredLocale.preferredLocale);
        return tmp;
      }
    }
  }
  const found = arr4.filter(tmp13);
  cResult[5] = tmp4;
  cResult[6] = arr4;
  cResult[7] = found;
  tmp12 = found;
}) : (function useGameProfileCommunitiesLocaleFilter(arg0, arg1) {
  let items1;
  let closure_0 = arg1;
  let tmp = closure_4(arg0);
  let closure_1 = tmp;
  let items = [arg1];
  const memo = react.useMemo(() => {
    let items = closure_0;
    const uniq = _modDef12.uniq;
    _modDef12;
    if (closure_0 == null) {
      items = [];
    }
    const mapped = items.map((preferredLocale) => preferredLocale.preferredLocale);
    return uniq(mapped.filter(GlobalUtils.isNotNullish));
  }, items);
  const obj = {
    locales: memo,
    filteredGuilds: react.useMemo(() => {
      let items = closure_0;
      if (closure_0 == null) {
        items = [];
      }
      return items.filter((preferredLocale) => {
        const tmp = null == preferredLocale.preferredLocale || !set.has(preferredLocale.preferredLocale);
        return tmp;
      });
    }, items1),
    showLocaleFilter: memo.length >= 2
  };
  items1 = [arg1, tmp];
  return obj;
});
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileCommunitiesLocaleFilter.tsx");

export default tmp2;
