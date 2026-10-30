// Module ID: 10604
// Function ID: 10605
// Name: SlayerStorefrontTimeUtils
// Dependencies: [32, 19, 2044, 1090, 7618, 1114, 3735, 2]
// Exports: useIsLimitedOfferExpired, useTickingFormattedLimitedOfferTimeLeft

// Module 10604 (SlayerStorefrontTimeUtils)
import DurationsDefault from "Durations" /* 1090 */;
import intl4 from "intl" /* 1114 */;
import _modDef2044 from "module_2044" /* 2044 */;
import _modDef3735 from "module_3735" /* 3735 */;
import useIntervalDefault from "useInterval" /* 7618 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

function getLimitedOfferTimeLeft(arg0) {
  let floor;
  let floor2;
  let result;
  let result1;
  if (null == arg0) {
    return null;
  } else {
    const obj2 = _modDef2044(arg0);
    const diffResult = obj2.diff(_modDef2044(), "seconds");
    let tmp4 = null;
    if (diffResult > 0) {
      const time = { days: Math.floor(diffResult / DurationsDefault.Seconds.DAY), hours: floor(result / DurationsDefault.Seconds.HOUR), minutes: floor2(result1 / DurationsDefault.Seconds.MINUTE), seconds: diffResult % DurationsDefault.Seconds.MINUTE };
      const _Math = Math;
      const _Math2 = Math;
      floor = Math.floor;
      result = diffResult % tmp5(1090).Seconds.DAY;
      const _Math3 = Math;
      floor2 = Math.floor;
      result1 = diffResult % tmp5(1090).Seconds.HOUR;
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
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3735.PPaJSw, obj3);
    } else {
      const intl = intl4.intl;
      const formatToPlainString = intl.formatToPlainString;
      const _Math = Math;
      const obj = { minutes: Math.max(tmp13, 1) };
      const prop = _modDef3735["7Z+aIf"];
      formatToPlainStringResult = formatToPlainString(prop, obj);
    }
    return formatToPlainStringResult;
  }
}
let result = size.fileFinishedImporting("modules/slayer_storefront/utils/SlayerStorefrontTimeUtils.tsx");

export { getLimitedOfferTimeLeft };
export function useIsLimitedOfferExpired(arg0) {
  const tmp = null != arg0 && null == getLimitedOfferTimeLeft(arg0);
  let SECOND = null;
  const tmp3 = _slicedToArray(react.useReducer((arg0) => arg0 + 1, 0), 2)[1];
  const tmp6 = useIntervalDefault;
  if (null != arg0) {
    SECOND = null;
    if (!tmp) {
      SECOND = DurationsDefault.Millis.SECOND;
    }
  }
  tmp6(tmp3, SECOND);
  return tmp;
}
export { formatLimitedOfferTimeLeft };
export function useTickingFormattedLimitedOfferTimeLeft(endDate, enabled) {
  let closure_1;
  let first;
  let closure_0 = endDate;
  let flag = enabled;
  if (enabled === undefined) {
    flag = true;
  }
  importDefault = undefined;
  [first, importDefault] = react.useState(() => formatLimitedOfferTimeLeft(endDate));
  let num = null;
  const tmp3 = useIntervalDefault;
  if (flag) {
    num = 1000;
  }
  tmp3(() => {
    closure_1(formatLimitedOfferTimeLeft(endDate));
  }, num);
  let tmp5 = null;
  if (flag) {
    tmp5 = first;
  }
  return tmp5;
}
