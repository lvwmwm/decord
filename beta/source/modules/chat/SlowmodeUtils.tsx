// Module ID: 7961
// Function ID: 7962
// Name: SlowmodeUtils
// Dependencies: [4431, 1078, 558, 568, 504, 1119, 1095, 4384, 2]
// Exports: canBypassSlowmode, canBypassSlowmodeHelper, getSlowmodeDescription, getSlowmodeIndicatorText

// Module 7961 (SlowmodeUtils)
import DurationsDefault from "Durations" /* 1095 */;
import util from "util" /* 1119 */;
import PermissionStore from "PermissionStore" /* 4431 */;

const require = globalThis.__r;

require = fn;
const Permissions = fn(1078).Permissions;
const ReactCompilerGating = fn(558);
function canBypassSlowmodeHelper(rateLimitPerUser, can) {
  return can.can(Permissions.BYPASS_SLOWMODE, rateLimitPerUser);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/SlowmodeUtils.tsx");

export { canBypassSlowmodeHelper };
export const canBypassSlowmode = function canBypassSlowmode(channel) {
  return PermissionStore.can(Permissions.BYPASS_SLOWMODE, channel);
};
export const useCanBypassSlowmode = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return PermissionStore.can(Permissions.BYPASS_SLOWMODE, closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
  const items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () => PermissionStore.can(Permissions.BYPASS_SLOWMODE, closure_0));
});
export const getSlowmodeIndicatorText = function getSlowmodeIndicatorText(stateFromStores, canBypassSlowmode) {
  if (canBypassSlowmode) {
    const intl2 = util.intl;
    return intl2.string(util.t["8+NidX"]);
  } else if (stateFromStores >= DurationsDefault.Millis.HOUR) {
    const time2 = tmp2(4384).duration(stateFromStores);
    const _HermesInternal3 = HermesInternal;
    const combined = "" + time2.minutes();
    const tmp2Result = tmp2(4384);
    const _HermesInternal4 = HermesInternal;
    const combined1 = "" + time2.seconds();
    const padStartResult = combined.padStart(2, "0");
    const _HermesInternal5 = HermesInternal;
    return "" + time2.hours() + ":" + padStartResult + ":" + combined1.padStart(2, "0");
  } else if (stateFromStores > 0) {
    const time = tmp2(4384).duration(stateFromStores);
    const _HermesInternal = HermesInternal;
    const combined2 = "" + time.seconds();
    const tmp2Result2 = tmp2(4384);
    const _HermesInternal2 = HermesInternal;
    return "" + time.minutes() + ":" + combined2.padStart(2, "0");
  } else {
    const intl = util.intl;
    return intl.string(util.t.Icu3bf);
  }
};
export const getSlowmodeDescription = function getSlowmodeDescription(rateLimitPerUser) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (rateLimitPerUser >= DurationsDefault.Seconds.HOUR) {
    const _Math2 = Math;
    const rounded = Math.floor(rateLimitPerUser / tmp(1095).Seconds.HOUR);
    const _Math3 = Math;
    const diff = rateLimitPerUser - rounded * tmp(1095).Seconds.HOUR;
    const rounded1 = Math.floor(diff / tmp(1095).Seconds.MINUTE);
    const diff1 = rateLimitPerUser - rounded * tmp(1095).Seconds.HOUR;
    const diff2 = diff1 - rounded1 * tmp(1095).Seconds.MINUTE;
    const intl3 = util.intl;
    const t3 = util.t;
    const time = { hours: rounded, minutes: rounded1, seconds: diff2 };
    return intl3.formatToPlainString(flag ? t3.oEwLez : t3["3hz51F"], time);
  } else if (rateLimitPerUser >= 60) {
    const _Math = Math;
    const rounded2 = Math.floor(rateLimitPerUser / 60);
    const intl2 = util.intl;
    const t2 = util.t;
    const time1 = { minutes: rounded2, seconds: rateLimitPerUser - 60 * rounded2 };
    return intl2.formatToPlainString(flag ? t2.DARKYm : t2.sY3wlG, time1);
  } else {
    const intl = util.intl;
    const t = util.t;
    const obj = { seconds: rateLimitPerUser };
    return intl.formatToPlainString(flag ? t["9yE8Ga"] : t.IWntYg, obj);
  }
};
