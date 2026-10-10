// Module ID: 12297
// Function ID: 12298
// Name: useGuildPowerupsWarningConfig
// Dependencies: [19, 12298, 558, 576, 8029, 504, 1126, 2600, 2]

// Module 12297 (useGuildPowerupsWarningConfig)
import intl3 from "intl" /* 1126 */;
import _modDef2600 from "module_2600" /* 2600 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 8029 */;
import react_mod from "react" /* 19 */;
import AppliedGuildBoostStore from "AppliedGuildBoostStore" /* 12298 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let react = react_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildPowerupsWarningConfig(arg0, join) {
  let closure_0;
  let first;
  let tmp17;
  let tmp7;
  let tmp8;
  let tmp9;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(14);
  const spent = useGuildPowerupsBoostCountDefault(arg0).spent;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AppliedGuildBoostStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] !== stateFromStores) {
    let num5;
    if (stateFromStores != null) {
      const filter = stateFromStores.filter;
      if (filter != null) {
        const found = filter((ended) => !ended.ended && null == ended.endsAt);
        if (found != null) {
          num5 = found.length;
        }
      }
    }
    if (num5 == null) {
      num5 = 0;
    }
    cResult[4] = stateFromStores;
    cResult[5] = num5;
    tmp9 = num5;
  } else {
    tmp9 = cResult[5];
  }
  const diff = spent - tmp9;
  if (diff <= 0) {
    let tmp18;
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { shouldShow: false, title: "", description: "", requiredBoostCount: 0 };
      cResult[6] = obj2;
      tmp18 = obj2;
    } else {
      tmp18 = cResult[6];
    }
    tmp17 = tmp18;
  } else {
    let tmp12;
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(_modDef2600.n5hQhc);
      cResult[7] = stringResult;
      tmp12 = stringResult;
    } else {
      tmp12 = cResult[7];
    }
    if (cResult[8] === join) {
      let tmp15;
      if (cResult[9] === diff) {
        tmp15 = cResult[10];
      }
      if (cResult[11] === diff) {
        if (cResult[12] === tmp15) {
          tmp17 = cResult[13];
        }
      }
      const obj3 = { shouldShow: true, title: tmp12, description: tmp15, requiredBoostCount: diff };
      cResult[11] = diff;
      cResult[12] = tmp15;
      cResult[13] = obj3;
      tmp17 = obj3;
    }
    const intl2 = tmp(1126).intl;
    const formatToPlainString = intl2.formatToPlainString;
    const obj4 = { boostCount: diff, perksString: join.join(", ") };
    const iAaAiG = tmp4(2600).iAaAiG;
    const formatToPlainStringResult = formatToPlainString(iAaAiG, obj4);
    cResult[8] = join;
    cResult[9] = diff;
    cResult[10] = formatToPlainStringResult;
    tmp15 = formatToPlainStringResult;
  }
  return tmp17;
}) : (function useGuildPowerupsWarningConfig(arg0, arg1) {
  let closure_0;
  let closure_1;
  let stateFromStores;
  _require = arg0;
  importDefault = arg1;
  const spent = require("useGuildPowerupsBoostCount")(arg0).spent;
  let obj = require("get initialized");
  const items = [AppliedGuildBoostStore];
  const items1 = [arg0];
  stateFromStores = obj.useStateFromStores(items, () => AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(closure_0), items1);
  const items2 = [stateFromStores];
  const diff = spent - react.useMemo(() => {
    let num;
    const arr = stateFromStores;
    if (stateFromStores != null) {
      const filter = arr.filter;
      if (filter != null) {
        const found = filter((ended) => !ended.ended && null == ended.endsAt);
        if (found != null) {
          num = found.length;
        }
      }
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }, items2);
  react = diff;
  const items3 = [diff, arg1];
  return react.useMemo(() => {
    let formatToPlainString;
    let iAaAiG;
    let intl;
    let obj;
    let obj2;
    if (react <= 0) {
      obj = { shouldShow: false, title: "", description: "", requiredBoostCount: 0 };
    } else {
      obj = { shouldShow: true, title: intl.string(_modDef2600.n5hQhc), description: formatToPlainString(iAaAiG, obj2), requiredBoostCount: react };
      intl = intl3.intl;
      const intl2 = intl3.intl;
      formatToPlainString = intl2.formatToPlainString;
      obj2 = { boostCount: react, perksString: closure_1.join(", ") };
      iAaAiG = _modDef2600.iAaAiG;
    }
    return obj;
  }, items3);
});
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsWarningConfig.tsx");

export default tmp2;
