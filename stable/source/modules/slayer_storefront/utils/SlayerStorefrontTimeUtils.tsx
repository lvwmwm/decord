// Module ID: 16753
// Function ID: 16754
// Name: SlayerStorefrontTimeUtils
// Dependencies: [32, 19, 4424, 1103, 1127, 3588, 558, 576, 6869, 2]

// Module 16753 (SlayerStorefrontTimeUtils)
import DurationsDefault from "Durations" /* 1103 */;
import intl4 from "intl" /* 1127 */;
import _modDef3588 from "module_3588" /* 3588 */;
import _modDef4424 from "module_4424" /* 4424 */;
import useIntervalDefault from "useInterval" /* 6869 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

function getLimitedOfferTimeLeft(arg0) {
  let floor;
  let floor2;
  let result;
  let result1;
  if (null == arg0) {
    return null;
  } else {
    const obj2 = _modDef4424(arg0);
    const diffResult = obj2.diff(_modDef4424(), "seconds");
    let tmp4 = null;
    if (diffResult > 0) {
      const time = { days: Math.floor(diffResult / DurationsDefault.Seconds.DAY), hours: floor(result / DurationsDefault.Seconds.HOUR), minutes: floor2(result1 / DurationsDefault.Seconds.MINUTE), seconds: diffResult % DurationsDefault.Seconds.MINUTE };
      const _Math = Math;
      const _Math2 = Math;
      floor = Math.floor;
      result = diffResult % tmp5(1103).Seconds.DAY;
      const _Math3 = Math;
      floor2 = Math.floor;
      result1 = diffResult % tmp5(1103).Seconds.HOUR;
      tmp4 = time;
    }
    return tmp4;
  }
}
function formatLimitedOfferTimeLeft(arg0) {
  let days;
  let hours;
  const tmp = getLimitedOfferTimeLeft(arg0);
  if (null == tmp) {
    return null;
  } else {
    let formatToPlainStringResult;
    ({ days, hours } = tmp);
    if (days > 0) {
      const intl3 = intl4.intl;
      const obj2 = { days };
      formatToPlainStringResult = intl3.formatToPlainString(intl4.t.BXpdIg, obj2);
    } else if (hours > 0) {
      const intl2 = intl4.intl;
      const obj3 = { hours };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3588.PPaJSw, obj3);
    } else {
      const intl = intl4.intl;
      const formatToPlainString = intl.formatToPlainString;
      const _Math = Math;
      const obj = { minutes: Math.max(tmp13, 1) };
      const prop = _modDef3588["7Z+aIf"];
      formatToPlainStringResult = formatToPlainString(prop, obj);
    }
    return formatToPlainStringResult;
  }
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let tmp4;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] !== arg0) {
    const fn = function l() {
      return formatLimitedOfferTimeLeft(closure_0);
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  [r10022, importDefault] = react.useState(tmp4);
  _slicedToArray(react.useState(tmp4), 2);
  if (cResult[2] !== arg0) {
    class L {
      constructor() {
        importDefault(formatLimitedOfferTimeLeft(closure_0));
      }
    }
    cResult[2] = arg0;
    cResult[3] = L;
    tmp6 = L;
  } else {
    class L {
      constructor() {
        importDefault(formatLimitedOfferTimeLeft(closure_0));
      }
    }
  }
  const tmp7 = useIntervalDefault;
  if (undefined === arg1 || arg1) {
    class L {
      constructor() {
        importDefault(formatLimitedOfferTimeLeft(closure_0));
      }
    }
  }
  tmp7(tmp6, null);
  if (undefined === arg1 || arg1) {
    class L {
      constructor() {
        importDefault(formatLimitedOfferTimeLeft(closure_0));
      }
    }
  }
  return null;
}) : ((arg0) => {
  let closure_1;
  let first;
  let closure_0 = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  importDefault = undefined;
  [first, importDefault] = react.useState(() => formatLimitedOfferTimeLeft(closure_0));
  let num = null;
  const tmp3 = useIntervalDefault;
  if (flag) {
    num = 1000;
  }
  tmp3(() => {
    closure_1(formatLimitedOfferTimeLeft(closure_0));
  }, num);
  let tmp5 = null;
  if (flag) {
    tmp5 = first;
  }
  return tmp5;
});
let result = size.fileFinishedImporting("modules/slayer_storefront/utils/SlayerStorefrontTimeUtils.tsx");

export { getLimitedOfferTimeLeft };
export { formatLimitedOfferTimeLeft };
export const useTickingFormattedLimitedOfferTimeLeft = tmp2;
