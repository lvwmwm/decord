// Module ID: 12539
// Function ID: 12540
// Name: useConjureSpendLimitNotice
// Dependencies: [10850, 504, 2062, 1114, 3865, 2]
// Exports: default

// Module 12539 (useConjureSpendLimitNotice)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ConjureSpendLimitStore from "ConjureSpendLimitStore" /* 10850 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const numberFormat = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const result = size.fileFinishedImporting("modules/conjure/usage/useConjureSpendLimitNotice.tsx");

export default function useConjureSpendLimitNotice(arg0) {
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
        const intl2 = tmp(1114).intl;
        const obj3 = { helpdeskURL: submitRequestURL };
        formatResult1 = intl2.format(tmp6(3865)["bw/n4C"], obj3);
      } else {
        const intl = tmp(1114).intl;
        const obj4 = { limit: formatResult, helpdeskURL: submitRequestURL };
        formatResult1 = intl.format(tmp6(3865).GYqJXH, obj4);
      }
      return { blocked: true, message: formatResult1 };
    } else {
      if (null != stateFromStores.limitUsd) {
        if (null != formatResult) {
          if (stateFromStores.limitUsd > 0) {
            const _Math = Math;
            const _Math2 = Math;
            const obj6 = { blocked: false, message: intl3.formatToPlainString(_modDef3865.GHgG2B, obj7) };
            const bound = Math.min(99, Math.floor(stateFromStores.spentUsd / stateFromStores.limitUsd * 100));
            intl3 = tmp(1114).intl;
            return obj6;
          }
        }
      }
      return null;
    }
  }
};
