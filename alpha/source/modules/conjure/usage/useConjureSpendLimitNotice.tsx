// Module ID: 12336
// Function ID: 12337
// Name: useConjureSpendLimitNotice
// Dependencies: [10752, 558, 576, 504, 2064, 1125, 3863, 2]

// Module 12336 (useConjureSpendLimitNotice)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2064 */;
import _modDef3863 from "module_3863" /* 3863 */;
import ConjureSpendLimitStore from "ConjureSpendLimitStore" /* 10752 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const numberFormat = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureSpendLimitNotice(arg0) {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureSpendLimitStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return ConjureSpendLimitStore.getSpendLimit(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === stateFromStores) {
    let tmp10;
    let tmp11;
    let tmp12;
    if (cResult[5] === null == stateFromStores) {
      tmp10 = cResult[6];
      tmp11 = cResult[7];
      tmp12 = cResult[8];
    }
    const _Symbol = Symbol;
    if (tmp12 === Symbol.for("react.early_return_sentinel")) {
      if (cResult[14] === tmp10) {
        let tmp24;
        if (cResult[15] === tmp11) {
          tmp24 = cResult[16];
        }
        tmp12 = tmp24;
      }
      const obj2 = { blocked: tmp10, message: tmp11 };
      cResult[14] = tmp10;
      cResult[15] = tmp11;
      cResult[16] = obj2;
      tmp24 = obj2;
    }
    return tmp12;
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  let tmp14 = null;
  let tmp15;
  let flag;
  if (null != stateFromStores) {
    if (cResult[9] === stateFromStores.limitUsd) {
      if (cResult[10] === stateFromStores.spentUsd) {
        if (cResult[11] === stateFromStores.state) {
          flag = cResult[12];
          tmp15 = cResult[13];
          tmp14 = forResult;
        }
      }
    }
    let formatResult = null;
    if (null != stateFromStores.limitUsd) {
      formatResult = numberFormat.format(stateFromStores.limitUsd);
    }
    if ("blocked" === stateFromStores.state) {
      let formatResult1;
      const obj4 = HelpdeskUtilsDefault;
      const submitRequestURL = obj4.getSubmitRequestURL();
      if (null == formatResult) {
        const intl3 = tmp(1125).intl;
        const obj3 = { helpdeskURL: submitRequestURL };
        formatResult1 = intl3.format(tmp21(3863)["bw/n4C"], obj3);
      } else {
        const intl2 = tmp(1125).intl;
        const obj5 = { limit: formatResult, helpdeskURL: submitRequestURL };
        formatResult1 = intl2.format(tmp21(3863).GYqJXH, obj5);
      }
      tmp14 = { blocked: true, message: formatResult1 };
      const obj6 = { blocked: true, message: formatResult1 };
    } else {
      tmp14 = null;
      if (null != stateFromStores.limitUsd) {
        tmp14 = null;
        if (null != formatResult) {
          tmp14 = null;
          if (stateFromStores.limitUsd > 0) {
            const _Math = Math;
            const _Math2 = Math;
            const bound = Math.min(99, Math.floor(stateFromStores.spentUsd / stateFromStores.limitUsd * 100));
            const intl = tmp(1125).intl;
            const obj7 = { percent: bound, limit: formatResult };
            const formatToPlainStringResult = intl.formatToPlainString(_modDef3863.GHgG2B, obj7);
            cResult[9] = stateFromStores.limitUsd;
            cResult[10] = stateFromStores.spentUsd;
            cResult[11] = stateFromStores.state;
            cResult[12] = false;
            cResult[13] = formatToPlainStringResult;
            tmp14 = forResult;
            tmp15 = formatToPlainStringResult;
            flag = false;
          }
        }
      }
    }
  }
  cResult[4] = stateFromStores;
  cResult[5] = null == stateFromStores;
  cResult[6] = flag;
  cResult[7] = tmp15;
  cResult[8] = tmp14;
  tmp12 = tmp14;
  tmp11 = tmp15;
  tmp10 = flag;
}) : (function useConjureSpendLimitNotice(arg0) {
  let closure_0;
  let intl3;
  _require = arg0;
  const items = [ConjureSpendLimitStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => ConjureSpendLimitStore.getSpendLimit(closure_0), items1);
  if (null == stateFromStores) {
    return null;
  } else {
    let formatResult = null;
    if (null != stateFromStores.limitUsd) {
      formatResult = numberFormat.format(stateFromStores.limitUsd);
    }
    if ("blocked" === stateFromStores.state) {
      let formatResult1;
      const obj2 = HelpdeskUtilsDefault;
      const submitRequestURL = obj2.getSubmitRequestURL();
      if (null == formatResult) {
        const intl2 = tmp(1125).intl;
        const obj3 = { helpdeskURL: submitRequestURL };
        formatResult1 = intl2.format(tmp6(3863)["bw/n4C"], obj3);
      } else {
        const intl = tmp(1125).intl;
        const obj4 = { limit: formatResult, helpdeskURL: submitRequestURL };
        formatResult1 = intl.format(tmp6(3863).GYqJXH, obj4);
      }
      return { blocked: true, message: formatResult1 };
    } else {
      if (null != stateFromStores.limitUsd) {
        if (null != formatResult) {
          if (stateFromStores.limitUsd > 0) {
            const _Math = Math;
            const _Math2 = Math;
            const obj6 = { blocked: false, message: intl3.formatToPlainString(_modDef3863.GHgG2B, obj7) };
            const bound = Math.min(99, Math.floor(stateFromStores.spentUsd / stateFromStores.limitUsd * 100));
            intl3 = tmp(1125).intl;
            return obj6;
          }
        }
      }
      return null;
    }
  }
});
const result = size.fileFinishedImporting("modules/conjure/usage/useConjureSpendLimitNotice.tsx");

export default tmp3;
