// Module ID: 12574
// Function ID: 12575
// Name: useConjureSpendLimitNotice
// Dependencies: [10870, 504, 2061, 1113, 3868, 2]
// Exports: default

// Module 12574 (useConjureSpendLimitNotice)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2061 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ConjureSpendLimitStore from "ConjureSpendLimitStore" /* 10870 */;
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
        const intl2 = tmp(1113).intl;
        const obj3 = { helpdeskURL: submitRequestURL };
        formatResult1 = intl2.format(tmp6(3868)["bw/n4C"], obj3);
      } else {
        const intl = tmp(1113).intl;
        const obj4 = { limit: formatResult, helpdeskURL: submitRequestURL };
        formatResult1 = intl.format(tmp6(3868).GYqJXH, obj4);
      }
      return { blocked: true, message: formatResult1 };
    } else {
      if (null != stateFromStores.limitUsd) {
        if (null != formatResult) {
          if (stateFromStores.limitUsd > 0) {
            const _Math = Math;
            const _Math2 = Math;
            const obj6 = { blocked: false, message: intl3.formatToPlainString(_modDef3868.GHgG2B, obj7) };
            const bound = Math.min(99, Math.floor(stateFromStores.spentUsd / stateFromStores.limitUsd * 100));
            intl3 = tmp(1113).intl;
            return obj6;
          }
        }
      }
      return null;
    }
  }
};
