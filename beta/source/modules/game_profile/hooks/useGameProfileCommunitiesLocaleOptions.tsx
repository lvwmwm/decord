// Module ID: 9414
// Function ID: 9415
// Name: useGameProfileCommunitiesLocaleOptions
// Dependencies: [19, 9412, 1128, 558, 576, 2]

// Module 9414 (useGameProfileCommunitiesLocaleOptions)
import intl3 from "intl" /* 1128 */;
import GameProfileCommunitiesLocaleFilterStore2 from "GameProfileCommunitiesLocaleFilterStore" /* 9412 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GameProfileCommunitiesLocaleFilterStore_mod = GameProfileCommunitiesLocaleFilterStore2;
let _require;

const f101876 = (locale) => {
  let intl2;
  let stringResult;
  closure_0 = locale;
  if ("en-US" === locale) {
    const obj2 = { locale, label: intl2.string(closure_2_0(closure_2_1[2]).t.LQLMGP) };
    intl2 = closure_2_0(closure_2_1[2]).intl;
    return obj2;
  } else {
    const found = closure_0.find((value) => value.value === closure_0);
    const obj = { locale, label: stringResult };
    stringResult = locale;
    if (null != found) {
      const intl = closure_2_0(closure_2_1[2]).intl;
      stringResult = intl.string(found.localizedName);
    }
    return obj;
  }
};
const f101877 = (label, label2) => {
  label = label.label;
  return label.localeCompare(label2.label);
};
let react = react_mod;
let GameProfileCommunitiesLocaleFilterStore = GameProfileCommunitiesLocaleFilterStore_mod;
let closure_4 = GameProfileCommunitiesLocaleFilterStore2.useGameProfileCommunitiesLocaleFilterExclusions;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfileCommunitiesLocaleOptions(arg0, arr) {
  let closure_0;
  let first;
  let tmp8;
  _require = arg0;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(21);
  const tmp4 = closure_4(arg0);
  let closure_1 = tmp4;
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(toggleLocale) {
      return toggleLocale.toggleLocale;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = GameProfileCommunitiesLocaleFilterStore(first);
  let closure_2 = tmp6;
  if (cResult[1] !== arr) {
    const tmpResult = tmp(1128);
    _require = tmpResult.getAvailableLocales();
    const mapped = arr.map(f101876);
    const sorted = mapped.sort(f101877);
    cResult[1] = arr;
    cResult[2] = sorted;
    arr = sorted;
  } else {
    arr = cResult[2];
  }
  if (cResult[3] === tmp4) {
    let arr2;
    let tmp10;
    if (cResult[4] === arr) {
      arr2 = cResult[5];
    }
    const length = arr2.length;
    if (cResult[8] === length) {
      if (cResult[9] === tmp4) {
        if (cResult[10] === arr) {
          tmp10 = cResult[11];
        }
        if (cResult[15] === arg0) {
          let tmp13;
          if (cResult[16] === tmp6) {
            tmp13 = cResult[17];
          }
          if (cResult[18] === tmp10) {
            let tmp14;
            if (cResult[19] === tmp13) {
              tmp14 = cResult[20];
            }
            return tmp14;
          }
          const obj2 = { options: tmp10, toggleLocale: tmp13 };
          cResult[18] = tmp10;
          cResult[19] = tmp13;
          cResult[20] = obj2;
          tmp14 = obj2;
        }
        const fn4 = function _(arg0) {
          return closure_2(closure_0, arg0);
        };
        cResult[15] = arg0;
        cResult[16] = tmp6;
        cResult[17] = fn4;
        tmp13 = fn4;
      }
    }
    if (cResult[12] === length) {
      let tmp11;
      if (cResult[13] === tmp4) {
        tmp11 = cResult[14];
      }
      const mapped1 = arr.map(tmp11);
      cResult[8] = length;
      cResult[9] = tmp4;
      cResult[10] = arr;
      cResult[11] = mapped1;
      tmp10 = mapped1;
    }
    const fn3 = function h(locale) {
      locale = locale.locale;
      const label = locale.label;
      const hasItem = set.has(locale);
      let tmp2 = !hasItem;
      const obj = { locale, label, checked: tmp2, disabled: tmp2 };
      if (!hasItem) {
        tmp2 = 1 === length;
      }
      return obj;
    };
    cResult[12] = length;
    cResult[13] = tmp4;
    cResult[14] = fn3;
    tmp11 = fn3;
  }
  if (cResult[6] !== tmp4) {
    const fn2 = function v(arg0) {
      return !set.has(arg0);
    };
    cResult[6] = tmp4;
    cResult[7] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[7];
  }
  const found = arr.filter(tmp8);
  cResult[3] = tmp4;
  cResult[4] = arr;
  cResult[5] = found;
  arr2 = found;
}) : (function useGameProfileCommunitiesLocaleOptions(arg0, arg1) {
  let closure_2;
  let closure_3;
  let items1;
  let items2;
  let memo;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const tmp = memo(arg0);
  react = tmp;
  let tmp2 = GameProfileCommunitiesLocaleFilterStore((toggleLocale) => toggleLocale.toggleLocale);
  GameProfileCommunitiesLocaleFilterStore = tmp2;
  const items = [arg1];
  memo = react.useMemo(() => {
    let obj = intl3;
    const availableLocales = obj.getAvailableLocales();
    const mapped = closure_1.map(f101876);
    return mapped.sort(f101877);
  }, items);
  let obj = {
    options: react.useMemo(() => {
      const length = closure_1.filter((item) => !set.has(item)).length;
      return memo.map((locale) => {
        locale = locale.locale;
        const label = locale.label;
        const hasItem = set.has(locale);
        let tmp2 = !hasItem;
        const obj = { locale, label, checked: tmp2, disabled: tmp2 };
        if (!hasItem) {
          tmp2 = 1 === length;
        }
        return obj;
      });
    }, items1),
    toggleLocale: react.useCallback((arg0) => closure_3(closure_0, arg0), items2)
  };
  items1 = [memo, arg1, tmp];
  items2 = [tmp2, arg0];
  return obj;
});
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileCommunitiesLocaleOptions.tsx");

export default tmp2;
