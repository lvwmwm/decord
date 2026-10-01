// Module ID: 7101
// Function ID: 7102
// Name: SlowmodeUtils
// Dependencies: [4469, 1074, 504, 1115, 1091, 4421, 2]
// Exports: canBypassSlowmode, canBypassSlowmodeHelper, getSlowmodeDescription, getSlowmodeIndicatorText, useCanBypassSlowmode

// Module 7101 (SlowmodeUtils)
import Constants from "Constants" /* 1074 */;
import DurationsDefault from "Durations" /* 1091 */;
import intl4 from "intl" /* 1115 */;
import _modDef4421 from "module_4421" /* 4421 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/chat/SlowmodeUtils.tsx");

export const canBypassSlowmodeHelper = function canBypassSlowmodeHelper(rateLimitPerUser, can) {
  return can.can(Permissions.BYPASS_SLOWMODE, rateLimitPerUser);
};
export const canBypassSlowmode = function canBypassSlowmode(channel) {
  return PermissionStore.can(Permissions.BYPASS_SLOWMODE, channel);
};
export const useCanBypassSlowmode = function useCanBypassSlowmode(channel) {
  _require = channel;
  const items = [PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => PermissionStore.can(Permissions.BYPASS_SLOWMODE, channel));
};
export const getSlowmodeIndicatorText = function getSlowmodeIndicatorText(stateFromStores, canBypassSlowmode) {
  const tmp = canBypassSlowmode;
  if (tmp) {
    const intl2 = intl4.intl;
    return intl2.string(intl4.t["8+NidX"]);
  } else if (stateFromStores >= DurationsDefault.Millis.HOUR) {
    const tmp3Result = _modDef4421;
    const time2 = tmp3Result.duration(stateFromStores);
    const _HermesInternal3 = HermesInternal;
    const combined = "" + time2.minutes();
    const _HermesInternal4 = HermesInternal;
    const padStartResult = combined.padStart(2, "0");
    const combined1 = "" + time2.seconds();
    const _HermesInternal5 = HermesInternal;
    const padStartResult1 = combined1.padStart(2, "0");
    return "" + time2.hours() + ":" + padStartResult + ":" + padStartResult1;
  } else if (stateFromStores > 0) {
    const tmp3Result2 = _modDef4421;
    const time = tmp3Result2.duration(stateFromStores);
    const _HermesInternal = HermesInternal;
    const combined2 = "" + time.seconds();
    const _HermesInternal2 = HermesInternal;
    const padStartResult2 = combined2.padStart(2, "0");
    return "" + time.minutes() + ":" + padStartResult2;
  } else {
    const intl = intl4.intl;
    return intl.string(intl4.t.Icu3bf);
  }
};
export const getSlowmodeDescription = function getSlowmodeDescription(rateLimitPerUser) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (rateLimitPerUser >= DurationsDefault.Seconds.HOUR) {
    const _Math2 = Math;
    const rounded = Math.floor(rateLimitPerUser / tmp(1091).Seconds.HOUR);
    const _Math3 = Math;
    const diff = rateLimitPerUser - rounded * tmp(1091).Seconds.HOUR;
    const floorResult = floor(diff / DurationsDefault.Seconds.MINUTE);
    const diff1 = rateLimitPerUser - rounded * tmp(1091).Seconds.HOUR;
    const diff2 = diff1 - floorResult * tmp(1091).Seconds.MINUTE;
    const intl3 = intl4.intl;
    const formatToPlainString3 = intl3.formatToPlainString;
    const t3 = intl4.t;
    const time = { hours: rounded, minutes: floorResult, seconds: diff2 };
    return formatToPlainString3(flag ? t3.oEwLez : t3["3hz51F"], time);
  } else if (rateLimitPerUser >= 60) {
    const _Math = Math;
    const rounded1 = Math.floor(rateLimitPerUser / 60);
    const intl2 = intl4.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const t2 = intl4.t;
    const time1 = { minutes: rounded1, seconds: rateLimitPerUser - 60 * rounded1 };
    return formatToPlainString2(flag ? t2.DARKYm : t2.sY3wlG, time1);
  } else {
    const intl = intl4.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = intl4.t;
    const obj = { seconds: rateLimitPerUser };
    return formatToPlainString(flag ? t["9yE8Ga"] : t.IWntYg, obj);
  }
};
