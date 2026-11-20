// Module ID: 18290
// Function ID: 18291
// Name: useConjureSpendLimitNotice
// Dependencies: [6863, 504, 2186, 1112, 4091, 2]
// Exports: default

// Module 18290 (useConjureSpendLimitNotice)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2186 */;
import _modDef4091 from "module_4091" /* 4091 */;
import ConjureSpendLimitStore from "ConjureSpendLimitStore" /* 6863 */;
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
        const intl2 = tmp(1112).intl;
        const obj3 = { helpdeskURL: submitRequestURL };
        formatResult1 = intl2.format(tmp6(4091)["bw/n4C"], obj3);
      } else {
        const intl = tmp(1112).intl;
        const obj4 = { limit: formatResult, helpdeskURL: submitRequestURL };
        formatResult1 = intl.format(tmp6(4091).GYqJXH, obj4);
      }
      return { blocked: true, message: formatResult1 };
    } else {
      if (null != stateFromStores.limitUsd) {
        if (null != formatResult) {
          if (stateFromStores.limitUsd > 0) {
            const _Math = Math;
            const _Math2 = Math;
            const obj6 = { blocked: false, message: intl3.formatToPlainString(_modDef4091.GHgG2B, obj7) };
            const bound = Math.min(99, Math.floor(stateFromStores.spentUsd / stateFromStores.limitUsd * 100));
            intl3 = tmp(1112).intl;
            return obj6;
          }
        }
      }
      return null;
    }
  }
};
