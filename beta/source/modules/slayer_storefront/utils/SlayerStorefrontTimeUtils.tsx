// Module ID: 16751
// Function ID: 16752
// Name: SlayerStorefrontTimeUtils
// Dependencies: [32, 19, 4421, 1091, 1115, 3585, 6865, 2]
// Exports: useTickingFormattedLimitedOfferTimeLeft

// Module 16751 (SlayerStorefrontTimeUtils)
import DurationsDefault from "Durations" /* 1091 */;
import intl4 from "intl" /* 1115 */;
import _modDef3585 from "module_3585" /* 3585 */;
import _modDef4421 from "module_4421" /* 4421 */;
import useIntervalDefault from "useInterval" /* 6865 */;
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
    const obj2 = _modDef4421(arg0);
    const diffResult = obj2.diff(_modDef4421(), "seconds");
    let tmp4 = null;
    if (diffResult > 0) {
      const time = { days: Math.floor(diffResult / DurationsDefault.Seconds.DAY), hours: floor(result / DurationsDefault.Seconds.HOUR), minutes: floor2(result1 / DurationsDefault.Seconds.MINUTE), seconds: diffResult % DurationsDefault.Seconds.MINUTE };
      const _Math = Math;
      const _Math2 = Math;
      floor = Math.floor;
      result = diffResult % tmp5(1091).Seconds.DAY;
      const _Math3 = Math;
      floor2 = Math.floor;
      result1 = diffResult % tmp5(1091).Seconds.HOUR;
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
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3585.PPaJSw, obj3);
    } else {
      const intl = intl4.intl;
      const formatToPlainString = intl.formatToPlainString;
      const _Math = Math;
      const obj = { minutes: Math.max(tmp13, 1) };
      const prop = _modDef3585["7Z+aIf"];
      formatToPlainStringResult = formatToPlainString(prop, obj);
    }
    return formatToPlainStringResult;
  }
}
let result = size.fileFinishedImporting("modules/slayer_storefront/utils/SlayerStorefrontTimeUtils.tsx");

export { getLimitedOfferTimeLeft };
export { formatLimitedOfferTimeLeft };
export const useTickingFormattedLimitedOfferTimeLeft = function useTickingFormattedLimitedOfferTimeLeft(endDate) {
  let closure_1;
  let first;
  let closure_0 = endDate;
  let flag = arg1;
  if (arg1 === undefined) {
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
};
