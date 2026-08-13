// Module ID: 16077
// Function ID: 16078
// Name: getLimitedOfferTimeLeft
// Dependencies: [32, 19, 3943, 687, 1236, 3239, 6956, 2]
// Exports: useTickingFormattedLimitedOfferTimeLeft

// Module 16077 (getLimitedOfferTimeLeft)
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
function getLimitedOfferTimeLeft(arg0) {
  if (null == arg0) {
    return null;
  } else {
    const diffResult = importDefault(3943)(arg0).diff(importDefault(3943)(), "seconds");
    let tmp4 = null;
    if (diffResult > 0) {
      const obj = { days: null, hours: null, minutes: null, seconds: null };
      const _Math = Math;
      obj[0] = Math.floor(diffResult / tmp5(687).Seconds.DAY);
      const _Math2 = Math;
      const result = diffResult % tmp5(687).Seconds.DAY;
      obj[1] = Math.floor(result / tmp5(687).Seconds.HOUR);
      const _Math3 = Math;
      const result1 = diffResult % tmp5(687).Seconds.HOUR;
      obj[2] = Math.floor(result1 / tmp5(687).Seconds.MINUTE);
      obj[3] = diffResult % tmp5(687).Seconds.MINUTE;
      tmp4 = obj;
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
    ({ days, hours } = tmp);
    if (days > 0) {
      const intl3 = require(1236) /* getSystemLocale */.intl;
      let obj = { days: null };
      obj[0] = days;
      let formatToPlainStringResult = intl3.formatToPlainString(require(1236) /* getSystemLocale */.t.BXpdIg, obj);
    } else if (hours > 0) {
      const intl2 = require(1236) /* getSystemLocale */.intl;
      obj = { hours: null };
      obj[0] = hours;
      formatToPlainStringResult = intl2.formatToPlainString(importDefault(3239).PPaJSw, obj);
    } else {
      const intl = require(1236) /* getSystemLocale */.intl;
      obj = { minutes: null };
      const _Math = Math;
      obj[0] = Math.max(tmp12, 1);
      formatToPlainStringResult = intl.formatToPlainString(importDefault(3239)["7Z+aIf"], obj);
    }
    return formatToPlainStringResult;
  }
}
let result = require("t").fileFinishedImporting("modules/slayer_storefront/utils/SlayerStorefrontTimeUtils.tsx");

export { getLimitedOfferTimeLeft };
export { formatLimitedOfferTimeLeft };
export const useTickingFormattedLimitedOfferTimeLeft = function useTickingFormattedLimitedOfferTimeLeft(endDate) {
  let closure_0 = endDate;
  const tmp = callback(React.useState(() => outer1_6(closure_0)), 2);
  const importDefault = tmp[1];
  importDefault(6956)(() => {
    callback(outer1_6(closure_0));
  }, 1000);
  return tmp[0];
};
