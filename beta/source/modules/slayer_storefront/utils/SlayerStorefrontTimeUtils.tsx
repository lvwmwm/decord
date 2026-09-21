// Module ID: 11051
// Function ID: 11052
// Name: SlayerStorefrontTimeUtils
// Dependencies: [32, 19, 4352, 1095, 1119, 3552, 558, 568, 7692, 2]

// Module 11051 (SlayerStorefrontTimeUtils)
import util from "util" /* 1119 */;
import _modDef3552 from "module_3552" /* 3552 */;
import _modDef4352 from "module_4352" /* 4352 */;
import useIntervalDefault from "useInterval" /* 7692 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function getLimitedOfferTimeLeft(arg0) {
  if (null == arg0) {
    return null;
  } else {
    const diffResult = _modDef4352(arg0).diff(_modDef4352(), "seconds");
    let tmp4 = null;
    if (diffResult > 0) {
      const time = { days: null, hours: null, minutes: null, seconds: null };
      const _Math = Math;
      time.days = Math.floor(diffResult / tmp5(1095).Seconds.DAY);
      const _Math2 = Math;
      const result = diffResult % tmp5(1095).Seconds.DAY;
      time.hours = Math.floor(result / tmp5(1095).Seconds.HOUR);
      const _Math3 = Math;
      const result1 = diffResult % tmp5(1095).Seconds.HOUR;
      time.minutes = Math.floor(result1 / tmp5(1095).Seconds.MINUTE);
      time.seconds = diffResult % tmp5(1095).Seconds.MINUTE;
      tmp4 = time;
    }
    return tmp4;
  }
}
function formatLimitedOfferTimeLeft(arg0) {
  const tmp = getLimitedOfferTimeLeft(arg0);
  if (null == tmp) {
    return null;
  } else {
    ({ days, hours } = tmp);
    if (days > 0) {
      const intl3 = util.intl;
      const obj2 = { days };
      let formatToPlainStringResult = intl3.formatToPlainString(util.t.BXpdIg, obj2);
    } else if (hours > 0) {
      const intl2 = util.intl;
      const obj3 = { hours };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3552.PPaJSw, obj3);
    } else {
      const intl = util.intl;
      const obj = { minutes: null };
      const _Math = Math;
      obj.minutes = Math.max(tmp12, 1);
      formatToPlainStringResult = intl.formatToPlainString(_modDef3552["7Z+aIf"], obj);
    }
    return formatToPlainStringResult;
  }
}
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/utils/SlayerStorefrontTimeUtils.tsx");

export { getLimitedOfferTimeLeft };
export { formatLimitedOfferTimeLeft };
export const useTickingFormattedLimitedOfferTimeLeft = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] !== arg0) {
    const fn = function o() {
      return formatLimitedOfferTimeLeft(closure_0);
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  const obj = require("c");
  [tmp5, importDefault] = noop.useState(tmp3);
  if (cResult[2] !== arg0) {
    const fn2 = function u() {
      importDefault(formatLimitedOfferTimeLeft(closure_0));
    };
    cResult[2] = arg0;
    cResult[3] = fn2;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[3];
  }
  useIntervalDefault(tmp6, 1000);
  return tmp5;
}) : ((arg0) => {
  closure_0 = arg0;
  const tmp = _slicedToArray(noop.useState(() => formatLimitedOfferTimeLeft(closure_0)), 2);
  importDefault = tmp[1];
  useIntervalDefault(() => {
    closure_1(formatLimitedOfferTimeLeft(closure_0));
  }, 1000);
  return tmp[0];
});
